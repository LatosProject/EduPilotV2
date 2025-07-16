import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropPortrait_Outlined = class IconCropPortrait_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"/>');
    }
};
IconCropPortrait_Outlined.styles = style;
IconCropPortrait_Outlined = __decorate([
    customElement('mdui-icon-crop-portrait--outlined')
], IconCropPortrait_Outlined);
export { IconCropPortrait_Outlined };
