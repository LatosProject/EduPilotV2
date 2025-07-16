import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropSquare_Rounded = class IconCropSquare_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H7c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"/>');
    }
};
IconCropSquare_Rounded.styles = style;
IconCropSquare_Rounded = __decorate([
    customElement('mdui-icon-crop-square--rounded')
], IconCropSquare_Rounded);
export { IconCropSquare_Rounded };
