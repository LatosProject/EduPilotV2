import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSensorWindow_Rounded = class IconSensorWindow_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 4v16H6V4h12m0-2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 19h10v-6H7v6zm3-9h4v1h3V5H7v6h3v-1z"/>');
    }
};
IconSensorWindow_Rounded.styles = style;
IconSensorWindow_Rounded = __decorate([
    customElement('mdui-icon-sensor-window--rounded')
], IconSensorWindow_Rounded);
export { IconSensorWindow_Rounded };
