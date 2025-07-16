import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGraphicEq_Outlined = class IconGraphicEq_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z"/>');
    }
};
IconGraphicEq_Outlined.styles = style;
IconGraphicEq_Outlined = __decorate([
    customElement('mdui-icon-graphic-eq--outlined')
], IconGraphicEq_Outlined);
export { IconGraphicEq_Outlined };
