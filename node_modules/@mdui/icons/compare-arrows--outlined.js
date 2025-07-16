import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompareArrows_Outlined = class IconCompareArrows_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"/>');
    }
};
IconCompareArrows_Outlined.styles = style;
IconCompareArrows_Outlined = __decorate([
    customElement('mdui-icon-compare-arrows--outlined')
], IconCompareArrows_Outlined);
export { IconCompareArrows_Outlined };
