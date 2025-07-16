import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconApproval_Outlined = class IconApproval_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm14 2H6v-2h12v2zM12 2C9.24 2 7 4.24 7 7l5 7 5-7c0-2.76-2.24-5-5-5zm0 9L9 7c0-1.66 1.34-3 3-3s3 1.34 3 3l-3 4z"/>');
    }
};
IconApproval_Outlined.styles = style;
IconApproval_Outlined = __decorate([
    customElement('mdui-icon-approval--outlined')
], IconApproval_Outlined);
export { IconApproval_Outlined };
