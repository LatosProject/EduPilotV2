import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthWide_TwoTone = class IconWidthWide_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 6h8v12H8z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6 18H4V6h2v12zm10 0H8V6h8v12zm4 0h-2V6h2v12z"/>');
    }
};
IconWidthWide_TwoTone.styles = style;
IconWidthWide_TwoTone = __decorate([
    customElement('mdui-icon-width-wide--two-tone')
], IconWidthWide_TwoTone);
export { IconWidthWide_TwoTone };
