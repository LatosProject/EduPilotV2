import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExposureNeg_1_Rounded = class IconExposureNeg_1_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M4 12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1zm15 6h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"/>');
    }
};
IconExposureNeg_1_Rounded.styles = style;
IconExposureNeg_1_Rounded = __decorate([
    customElement('mdui-icon-exposure-neg-1--rounded')
], IconExposureNeg_1_Rounded);
export { IconExposureNeg_1_Rounded };
