import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompassCalibration = class IconCompassCalibration extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="17" r="4"/><path d="M12 10.07c1.95 0 3.72.79 5 2.07l5-5C19.44 4.59 15.9 3 12 3S4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 5-2.08z"/>');
    }
};
IconCompassCalibration.styles = style;
IconCompassCalibration = __decorate([
    customElement('mdui-icon-compass-calibration')
], IconCompassCalibration);
export { IconCompassCalibration };
