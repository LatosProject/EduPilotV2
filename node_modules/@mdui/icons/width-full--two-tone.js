import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthFull_TwoTone = class IconWidthFull_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 6h10v12H7z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM5 18H4V6h1v12zm12 0H7V6h10v12zm3 0h-1V6h1v12z"/>');
    }
};
IconWidthFull_TwoTone.styles = style;
IconWidthFull_TwoTone = __decorate([
    customElement('mdui-icon-width-full--two-tone')
], IconWidthFull_TwoTone);
export { IconWidthFull_TwoTone };
