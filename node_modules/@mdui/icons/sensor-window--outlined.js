import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSensorWindow_Outlined = class IconSensorWindow_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v7h-4v-1h-4v1H6V4h12zM6 20v-7h12v7H6z"/>');
    }
};
IconSensorWindow_Outlined.styles = style;
IconSensorWindow_Outlined = __decorate([
    customElement('mdui-icon-sensor-window--outlined')
], IconSensorWindow_Outlined);
export { IconSensorWindow_Outlined };
