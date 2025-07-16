import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMinimize_TwoTone = class IconMinimize_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 19h12v2H6v-2z"/>');
    }
};
IconMinimize_TwoTone.styles = style;
IconMinimize_TwoTone = __decorate([
    customElement('mdui-icon-minimize--two-tone')
], IconMinimize_TwoTone);
export { IconMinimize_TwoTone };
