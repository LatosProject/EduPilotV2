import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWifi_2Bar_TwoTone = class IconWifi_2Bar_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 10c3.03 0 5.78 1.23 7.76 3.22l-2.12 2.12A7.967 7.967 0 0 0 12 13c-2.2 0-4.2.9-5.64 2.35l-2.12-2.12C6.22 11.23 8.97 10 12 10zm0 6c-1.38 0-2.63.56-3.53 1.46L12 21l3.53-3.54A4.98 4.98 0 0 0 12 16z"/>');
    }
};
IconWifi_2Bar_TwoTone.styles = style;
IconWifi_2Bar_TwoTone = __decorate([
    customElement('mdui-icon-wifi-2-bar--two-tone')
], IconWifi_2Bar_TwoTone);
export { IconWifi_2Bar_TwoTone };
