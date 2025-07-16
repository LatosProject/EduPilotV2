import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCropLandscape_Sharp = class IconCropLandscape_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 5H3v14h18V5zm-2 12H5V7h14v10z"/>');
    }
};
IconCropLandscape_Sharp.styles = style;
IconCropLandscape_Sharp = __decorate([
    customElement('mdui-icon-crop-landscape--sharp')
], IconCropLandscape_Sharp);
export { IconCropLandscape_Sharp };
