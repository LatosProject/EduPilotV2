import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEmail_TwoTone = class IconEmail_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m20 8-8 5-8-5v10h16zm0-2H4l8 4.99z" opacity=".3"/><path d="M4 20h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2zM20 6l-8 4.99L4 6h16zM4 8l8 5 8-5v10H4V8z"/>');
    }
};
IconEmail_TwoTone.styles = style;
IconEmail_TwoTone = __decorate([
    customElement('mdui-icon-email--two-tone')
], IconEmail_TwoTone);
export { IconEmail_TwoTone };
