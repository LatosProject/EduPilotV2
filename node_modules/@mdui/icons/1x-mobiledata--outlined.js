import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon1xMobiledata_Outlined = class Icon1xMobiledata_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 7h4v10H6V9H4V7zm11.83 4.72L18.66 7h-2.33l-1.66 2.77L13 7h-2.33l2.83 4.72L10.33 17h2.33l2-3.34 2 3.34H19l-3.17-5.28z"/>');
    }
};
Icon1xMobiledata_Outlined.styles = style;
Icon1xMobiledata_Outlined = __decorate([
    customElement('mdui-icon-1x-mobiledata--outlined')
], Icon1xMobiledata_Outlined);
export { Icon1xMobiledata_Outlined };
