import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalBar_TwoTone = class IconLocalBar_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9.23 9 12 12.11 14.77 9z" opacity=".3"/><path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM5.66 5h12.69l-1.78 2H7.43L5.66 5zM12 12.11 9.23 9h5.54L12 12.11z"/>');
    }
};
IconLocalBar_TwoTone.styles = style;
IconLocalBar_TwoTone = __decorate([
    customElement('mdui-icon-local-bar--two-tone')
], IconLocalBar_TwoTone);
export { IconLocalBar_TwoTone };
