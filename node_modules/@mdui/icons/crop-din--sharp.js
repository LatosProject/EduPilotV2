import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropDin_Sharp = class IconCropDin_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-2 16H5V5h14v14z"/>');
    }
};
IconCropDin_Sharp.styles = style;
IconCropDin_Sharp = __decorate([
    customElement('mdui-icon-crop-din--sharp')
], IconCropDin_Sharp);
export { IconCropDin_Sharp };
