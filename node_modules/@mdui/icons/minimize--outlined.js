import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMinimize_Outlined = class IconMinimize_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 19h12v2H6v-2z"/>');
    }
};
IconMinimize_Outlined.styles = style;
IconMinimize_Outlined = __decorate([
    customElement('mdui-icon-minimize--outlined')
], IconMinimize_Outlined);
export { IconMinimize_Outlined };
