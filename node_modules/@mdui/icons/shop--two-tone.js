import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShop_TwoTone = class IconShop_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 19h16V8H4v11zM9 9l7.5 4L9 18V9z" opacity=".3"/><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zm10 15H4V8h16v11zM9 9v9l7.5-5z"/>');
    }
};
IconShop_TwoTone.styles = style;
IconShop_TwoTone = __decorate([
    customElement('mdui-icon-shop--two-tone')
], IconShop_TwoTone);
export { IconShop_TwoTone };
