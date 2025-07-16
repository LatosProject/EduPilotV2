import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSensorWindow_TwoTone = class IconSensorWindow_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 4v7h-4v-1h-4v1H6V4h12zM6 20v-7h12v7H6z" opacity=".3"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v7h-4v-1h-4v1H6V4h12zM6 20v-7h12v7H6z"/>');
    }
};
IconSensorWindow_TwoTone.styles = style;
IconSensorWindow_TwoTone = __decorate([
    customElement('mdui-icon-sensor-window--two-tone')
], IconSensorWindow_TwoTone);
export { IconSensorWindow_TwoTone };
