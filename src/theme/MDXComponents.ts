import MDXComponents from '@theme-original/MDXComponents';
import { Youtube } from '../components/videos/Youtube';
import {
    SurfyHelpObjectType,
    ObjectTypeHelper,
    ObjectTypeMenuBreadcrumb,
    SurfyHelpPropertyType,
    PropertyTypeHelper,
    SurfyHelpStandaloneViewMenuBreadcrumb,
    SurfyHelpLinkToIndexView,
    SurfyHelpLinkToSingleView,
    ClickOnIndexViewMenuPathBreadcrumb,
} from '@site/surfy';

export default {
    ...MDXComponents,
    P: SurfyHelpPropertyType,
    LIV: SurfyHelpLinkToIndexView,
    LSV: SurfyHelpLinkToSingleView,
    OT: SurfyHelpObjectType,
    OTB: ObjectTypeMenuBreadcrumb,
    LIVB: SurfyHelpStandaloneViewMenuBreadcrumb,
    ObjectTypeMenuBreadcrumb,
    PH: PropertyTypeHelper,
    OH: ObjectTypeHelper,
    Youtube,
    ClickViewMenu: ClickOnIndexViewMenuPathBreadcrumb
};
