import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropPortrait_Rounded = class IconCropPortrait_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>');
    }
};
IconCropPortrait_Rounded.styles = style;
IconCropPortrait_Rounded = __decorate([
    customElement('mdui-icon-crop-portrait--rounded')
], IconCropPortrait_Rounded);
export { IconCropPortrait_Rounded };
