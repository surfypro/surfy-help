import MDXComponents from '@theme-original/MDXComponents';
import { Youtube } from '@site/src/components/videos/Youtube';
import { PropertyType } from '@site/src/components/MetaModel/PropertyType';
import { ObjectType } from '../components/MetaModel/ObjectType';
import { PropertyTypeHelper } from '../components/MetaModel/helpers/PropertyTypeHelper';
import { ObjectTypeHelper } from '../components/MetaModel/helpers/ObjectTypeHelper';
import { SurfyHelpLinkToIndexView } from '@site/surfy';


export default {
    ...MDXComponents,
    P: PropertyType,
    LIV: SurfyHelpLinkToIndexView,
    OT: ObjectType,
    PH: PropertyTypeHelper,
    OH: ObjectTypeHelper,
    Youtube
}