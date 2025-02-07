import MDXComponents from '@theme-original/MDXComponents';
import { Youtube } from '@site/src/components/videos/Youtube';
import { PropertyType } from '@site/src/components/MetaModel/PropertyType';
import { Properties } from '@site/src/components/MetaModel/Properties';
import { ObjectType } from '../components/MetaModel/ObjectType';
import { PropertyTypeHelper } from '../components/MetaModel/helpers/PropertyTypeHelper';
import { ObjectTypeHelper } from '../components/MetaModel/helpers/ObjectTypeHelper';

export default {
    ...MDXComponents,
    P: PropertyType,
    OT:ObjectType,
    PH: PropertyTypeHelper,
    OH:ObjectTypeHelper,
    Youtube,
    Properties
}