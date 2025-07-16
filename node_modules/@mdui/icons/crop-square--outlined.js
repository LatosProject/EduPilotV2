import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropSquare_Outlined = class IconCropSquare_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/>');
    }
};
IconCropSquare_Outlined.styles = style;
IconCropSquare_Outlined = __decorate([
    customElement('mdui-icon-crop-square--outlined')
], IconCropSquare_Outlined);
export { IconCropSquare_Outlined };
