import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropLandscape = class IconCropLandscape extends LitElement {
    render() {
        return svgTag('<path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/>');
    }
};
IconCropLandscape.styles = style;
IconCropLandscape = __decorate([
    customElement('mdui-icon-crop-landscape')
], IconCropLandscape);
export { IconCropLandscape };
