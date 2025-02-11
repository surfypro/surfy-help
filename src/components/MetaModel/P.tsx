import React from 'react';
import { PropertyType } from './PropertyType';
import { PropertyTypeCodes } from '@site/surfy';

interface PProps {
  code: PropertyTypeCodes;
}

export function P({ code }: PProps) {
  return <PropertyType code={code} />;
} 