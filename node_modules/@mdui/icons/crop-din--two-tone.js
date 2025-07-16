import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropDin_TwoTone = class IconCropDin_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>');
    }
};
IconCropDin_TwoTone.styles = style;
IconCropDin_TwoTone = __decorate([
    customElement('mdui-icon-crop-din--two-tone')
], IconCropDin_TwoTone);
export { IconCropDin_TwoTone };
