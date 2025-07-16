import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalWifi_0Bar = class IconSignalWifi_0Bar extends LitElement {
    render() {
        return svgTag('<path d="M12 6c3.33 0 6.49 1.08 9.08 3.07L12 18.17l-9.08-9.1C5.51 7.08 8.67 6 12 6m0-2C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4z"/>');
    }
};
IconSignalWifi_0Bar.styles = style;
IconSignalWifi_0Bar = __decorate([
    customElement('mdui-icon-signal-wifi-0-bar')
], IconSignalWifi_0Bar);
export { IconSignalWifi_0Bar };
