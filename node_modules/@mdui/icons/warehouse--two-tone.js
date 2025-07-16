import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWarehouse_TwoTone = class IconWarehouse_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 8.35V19h-2v-8H6v8H4V8.35l8-3.2 8 3.2zM22 21V7L12 3 2 7v14h6v-8h8v8h6zm-11-2H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z"/>');
    }
};
IconWarehouse_TwoTone.styles = style;
IconWarehouse_TwoTone = __decorate([
    customElement('mdui-icon-warehouse--two-tone')
], IconWarehouse_TwoTone);
export { IconWarehouse_TwoTone };
