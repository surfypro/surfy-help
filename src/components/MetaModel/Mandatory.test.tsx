import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Mandatory } from './Mandatory';
import { useTranslations } from '../Translations/translations';
import { PropertyTypeCodes } from '@site/surfy';

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
    })
}));

describe('Mandatory Component', () => {
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

    const propertyCode = 'building:name' as PropertyTypeCodes;

    it('should render the building properties with mandatory indicators', () => {
        render(<Mandatory code={propertyCode} />);

        // Check if the building title is rendered
        expect(screen.getByText('Building')).toBeInTheDocument();

        // Check if mandatory properties are rendered with asterisk
        expect(screen.getByText('Name *')).toBeInTheDocument();
        expect(screen.getByText('Address *')).toBeInTheDocument();

        // Check if non-mandatory property is rendered without asterisk
        expect(screen.getByText('Surface')).toBeInTheDocument();
    });

    it('should display tooltips with property descriptions', () => {
        render(<Mandatory code={propertyCode} />);

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

        render(<Mandatory code={propertyCode} />);
        
        // Should still render without crashing
        expect(screen.getByText('Name *')).toBeInTheDocument();
    });
}); 