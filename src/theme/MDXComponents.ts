import MDXComponents from '@theme-original/MDXComponents';
import { Youtube } from '@site/src/components/videos/Youtube';
import {
    ObjectType,
    ObjectTypeHelper,
    ObjectTypeMenuBreadcrumb,
    PropertyType,
    PropertyTypeHelper,
    SurfyHelpLinkToIndexView,
} from '@site/surfy';

export default {
    ...MDXComponents,
    P: PropertyType,
    LIV: SurfyHelpLinkToIndexView,
    OT: ObjectType,
    ObjectTypeMenuBreadcrumb,
    PH: PropertyTypeHelper,
    OH: ObjectTypeHelper,
    Youtube,
};
