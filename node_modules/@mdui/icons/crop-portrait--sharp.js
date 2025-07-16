import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropPortrait_Sharp = class IconCropPortrait_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5v18h14V3zm-2 16H7V5h10v14z"/>');
    }
};
IconCropPortrait_Sharp.styles = style;
IconCropPortrait_Sharp = __decorate([
    customElement('mdui-icon-crop-portrait--sharp')
], IconCropPortrait_Sharp);
export { IconCropPortrait_Sharp };
