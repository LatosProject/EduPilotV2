import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEdgesensorLow_TwoTone = class IconEdgesensorLow_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 4h8v1H8zm0 15h8v1H8z" opacity=".3"/><path d="M20 10h2v7h-2zM2 7h2v7H2zm14-4.99L8 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-1.99-2-1.99zM16 20H8v-1h8v1zm0-3H8V7h8v10zm0-12H8V4h8v1z"/>');
    }
};
IconEdgesensorLow_TwoTone.styles = style;
IconEdgesensorLow_TwoTone = __decorate([
    customElement('mdui-icon-edgesensor-low--two-tone')
], IconEdgesensorLow_TwoTone);
export { IconEdgesensorLow_TwoTone };
