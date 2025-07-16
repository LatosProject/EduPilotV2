import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmsFailed_TwoTone = class IconSmsFailed_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 17.17 5.17 16H20V4H4v13.17zM11 6h2v4h-2V6zm0 6h2v2h-2v-2z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"/>');
    }
};
IconSmsFailed_TwoTone.styles = style;
IconSmsFailed_TwoTone = __decorate([
    customElement('mdui-icon-sms-failed--two-tone')
], IconSmsFailed_TwoTone);
export { IconSmsFailed_TwoTone };
