import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropLandscape_Outlined = class IconCropLandscape_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/>');
    }
};
IconCropLandscape_Outlined.styles = style;
IconCropLandscape_Outlined = __decorate([
    customElement('mdui-icon-crop-landscape--outlined')
], IconCropLandscape_Outlined);
export { IconCropLandscape_Outlined };
