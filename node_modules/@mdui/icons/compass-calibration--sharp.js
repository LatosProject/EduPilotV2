import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompassCalibration_Sharp = class IconCompassCalibration_Sharp extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="17" r="4"/><path d="M12 3C8.1 3 4.56 4.59 2 7.15l5 5a7.06 7.06 0 0 1 10-.01l5-5C19.44 4.59 15.9 3 12 3z"/>');
    }
};
IconCompassCalibration_Sharp.styles = style;
IconCompassCalibration_Sharp = __decorate([
    customElement('mdui-icon-compass-calibration--sharp')
], IconCompassCalibration_Sharp);
export { IconCompassCalibration_Sharp };
