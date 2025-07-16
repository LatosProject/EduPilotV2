import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignCenter_Outlined = class IconVerticalAlignCenter_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M8 19h3v4h2v-4h3l-4-4-4 4zm8-14h-3V1h-2v4H8l4 4 4-4zM4 11v2h16v-2H4z"/>');
    }
};
IconVerticalAlignCenter_Outlined.styles = style;
IconVerticalAlignCenter_Outlined = __decorate([
    customElement('mdui-icon-vertical-align-center--outlined')
], IconVerticalAlignCenter_Outlined);
export { IconVerticalAlignCenter_Outlined };
