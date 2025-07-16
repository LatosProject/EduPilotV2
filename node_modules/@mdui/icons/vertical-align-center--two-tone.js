import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignCenter_TwoTone = class IconVerticalAlignCenter_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 1v4H8l4 4 4-4h-3V1zM4 11h16v2H4zm4 8h3v4h2v-4h3l-4-4z"/>');
    }
};
IconVerticalAlignCenter_TwoTone.styles = style;
IconVerticalAlignCenter_TwoTone = __decorate([
    customElement('mdui-icon-vertical-align-center--two-tone')
], IconVerticalAlignCenter_TwoTone);
export { IconVerticalAlignCenter_TwoTone };
