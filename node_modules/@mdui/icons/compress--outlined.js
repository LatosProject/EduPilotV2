import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompress_Outlined = class IconCompress_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 9v2h16V9H4zm12-5-1.41-1.41L13 4.17V1h-2v3.19L9.39 2.61 8 4l4 4 4-4zM4 14h16v-2H4v2zm4 5 1.39 1.39L11 18.81V22h2v-3.17l1.59 1.59L16 19l-4-4-4 4z"/>');
    }
};
IconCompress_Outlined.styles = style;
IconCompress_Outlined = __decorate([
    customElement('mdui-icon-compress--outlined')
], IconCompress_Outlined);
export { IconCompress_Outlined };
