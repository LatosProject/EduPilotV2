import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSensorWindow_Sharp = class IconSensorWindow_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 4v16H6V4h12M4 2v20h16V2H4zm3 17h10v-6H7v6zm3-9h4v1h3V5H7v6h3v-1z"/>');
    }
};
IconSensorWindow_Sharp.styles = style;
IconSensorWindow_Sharp = __decorate([
    customElement('mdui-icon-sensor-window--sharp')
], IconSensorWindow_Sharp);
export { IconSensorWindow_Sharp };
