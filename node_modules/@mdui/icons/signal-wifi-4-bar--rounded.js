import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalWifi_4Bar_Rounded = class IconSignalWifi_4Bar_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l10.08 12.56c.8 1 2.32 1 3.12 0L23.64 7z"/>');
    }
};
IconSignalWifi_4Bar_Rounded.styles = style;
IconSignalWifi_4Bar_Rounded = __decorate([
    customElement('mdui-icon-signal-wifi-4-bar--rounded')
], IconSignalWifi_4Bar_Rounded);
export { IconSignalWifi_4Bar_Rounded };
