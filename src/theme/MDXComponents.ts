import MDXComponents from '@theme-original/MDXComponents';
import { Youtube } from '@site/src/components/videos/Youtube';
import { PropertyType } from '@site/src/components/MetaModel/PropertyType';
import { ObjectType } from '../components/MetaModel/ObjectType';
import { PropertyTypeHelper } from '../components/MetaModel/helpers/PropertyTypeHelper';
import { ObjectTypeHelper } from '../components/MetaModel/helpers/ObjectTypeHelper';
import { Mandatory } from '@site/src/components/MetaModel/Mandatory';

export default {
    ...MDXComponents,
    P: PropertyType,
    OT:ObjectType,
    PH: PropertyTypeHelper,
    OH:ObjectTypeHelper,
    Youtube,
    Mandatory
}