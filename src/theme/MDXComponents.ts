import MDXComponents from '@theme-original/MDXComponents';
import { Youtube } from '@site/src/components/videos/Youtube';
import { PropertyType } from '@site/src/components/MetaModel/PropertyType';
import { ObjectType } from '../components/MetaModel/ObjectType';
import { ObjectTypeMenuBreadcrumb } from '../components/MetaModel/ObjectTypeMenuBreadcrumb';
import { PropertyTypeHelper } from '../components/MetaModel/helpers/PropertyTypeHelper';
import { ObjectTypeHelper } from '../components/MetaModel/helpers/ObjectTypeHelper';
import { SurfyHelpLinkToIndexView } from '@site/surfy';


export default {
    ...MDXComponents,
    P: PropertyType,
    LIV: SurfyHelpLinkToIndexView,
    OT: ObjectType,
    ObjectTypeMenuBreadcrumb,
    PH: PropertyTypeHelper,
    OH: ObjectTypeHelper,
    Youtube
}