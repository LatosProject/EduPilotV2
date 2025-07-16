import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthNormal_TwoTone = class IconWidthNormal_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 6h4v12h-4z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4V6h4v12zm6 0h-4V6h4v12zm6 0h-4V6h4v12z"/>');
    }
};
IconWidthNormal_TwoTone.styles = style;
IconWidthNormal_TwoTone = __decorate([
    customElement('mdui-icon-width-normal--two-tone')
], IconWidthNormal_TwoTone);
export { IconWidthNormal_TwoTone };
