import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRMobiledata_Outlined = class IconRMobiledata_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7.8 7.2 9 10H7L5.87 7.33H4V10H2V2h5c1.13 0 2 .87 2 2v1.33c0 .8-.53 1.54-1.2 1.87zM7 4H4v1.33h3V4z"/>');
    }
};
IconRMobiledata_Outlined.styles = style;
IconRMobiledata_Outlined = __decorate([
    customElement('mdui-icon-r-mobiledata--outlined')
], IconRMobiledata_Outlined);
export { IconRMobiledata_Outlined };
