import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Properties } from './Properties';
import { useTranslations } from '../Translations/translations';
import { PropertyTypeCodes } from '@site/surfy';
import { P } from '../MetaModel/P';

// Mock the P component
jest.mock('../MetaModel/P', () => ({
    P: ({ code }: { code: PropertyTypeCodes }) => {
        const [objectType, propertyName] = code.split(':');
        return <span>{propertyName}</span>;
    }
}));

// Mock the translations hook
jest.mock('../Translations/translations', () => ({
    useTranslations: jest.fn()
}));

// Mock the getPropertyTypeByCode function
jest.mock('@site/surfy', () => ({
    getPropertyTypeByCode: jest.fn().mockReturnValue({
        objectTypeName: 'building',
        name: 'name',
        type: 'string',
        options: {
            mandatory: true,
            readOnly: false,
            calculated: false,
            technical: false
        }
    }),
    getObjectTypeDefinitionByName: jest.fn().mockReturnValue({
        propertiesByName: {
            name: {
                name: 'name',
                options: { mandatory: true, technical: false }
            },
            address: {
                name: 'address',
                options: { mandatory: true, technical: false }
            },
            surface: {
                name: 'surface',
                options: { mandatory: false, technical: false }
            }
        }
    }),
    CamelizedObjectTypeNames: {
        building: 'building'
    }
}));

describe('Properties Component', () => {
    beforeEach(() => {
        // Setup mock translation data
        (useTranslations as jest.Mock).mockReturnValue({
            propertyTypeTranslations: {
                building: {
                    name: {
                        label: 'Name',
                        description: 'Building name',
                        mandatory: true
                    },
                    address: {
                        label: 'Address',
                        description: 'Building address',
                        mandatory: true
                    },
                    surface: {
                        label: 'Surface',
                        description: 'Building surface area',
                        mandatory: false
                    }
                }
            },
            objectTypeTranslations: {
                building: {
                    label: 'Building',
                    description: 'A building entity'
                }
            }
        });
    });

    it('should render all properties when mandatory is false', () => {
        render(<Properties objectTypeName="building" mandatory={false} />);

        // Check if the building title is rendered
        expect(screen.getByText('Building')).toBeInTheDocument();

        // Check if all properties are rendered
        expect(screen.getByText('name')).toBeInTheDocument();
        expect(screen.getByText('address')).toBeInTheDocument();
        expect(screen.getByText('surface')).toBeInTheDocument();
    });

    it('should render only mandatory properties when mandatory is true', () => {
        render(<Properties objectTypeName="building" mandatory={true} />);

        // Check if only mandatory properties are rendered
        expect(screen.getByText('name')).toBeInTheDocument();
        expect(screen.getByText('address')).toBeInTheDocument();
        expect(screen.queryByText('surface')).not.toBeInTheDocument();
    });

    it('should display tooltips with property descriptions', () => {
        render(<Properties objectTypeName="building" />);

        // Check if descriptions are available in tooltips using aria-label
        expect(screen.getByLabelText('Building name')).toBeInTheDocument();
        expect(screen.getByLabelText('Building address')).toBeInTheDocument();
        expect(screen.getByLabelText('Building surface area')).toBeInTheDocument();
    });

    it('should handle properties with missing descriptions', () => {
        // Modify mock to include a property without description
        (useTranslations as jest.Mock).mockReturnValue({
            propertyTypeTranslations: {
                building: {
                    name: {
                        label: 'Name',
                        mandatory: true
                    }
                }
            },
            objectTypeTranslations: {
                building: {
                    label: 'Building'
                }
            }
        });

        render(<Properties objectTypeName="building" />);
        
        // Should still render without crashing
        expect(screen.getByText('name')).toBeInTheDocument();
    });
}); 