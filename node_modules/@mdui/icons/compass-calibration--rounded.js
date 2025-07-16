import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompassCalibration_Rounded = class IconCompassCalibration_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="17" r="4"/><path d="M12 3C8.49 3 5.28 4.29 2.8 6.41a1.01 1.01 0 0 0-.06 1.48l3.6 3.6c.36.36.92.39 1.32.08 1.2-.94 2.71-1.5 4.34-1.5 1.64 0 3.14.56 4.34 1.49.4.31.96.28 1.31-.08l3.6-3.6c.42-.42.38-1.1-.07-1.48C18.72 4.28 15.51 3 12 3z"/>');
    }
};
IconCompassCalibration_Rounded.styles = style;
IconCompassCalibration_Rounded = __decorate([
    customElement('mdui-icon-compass-calibration--rounded')
], IconCompassCalibration_Rounded);
export { IconCompassCalibration_Rounded };
