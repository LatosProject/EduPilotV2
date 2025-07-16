import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWifi_1Bar_Rounded = class IconWifi_1Bar_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="18" r="2"/>');
    }
};
IconWifi_1Bar_Rounded.styles = style;
IconWifi_1Bar_Rounded = __decorate([
    customElement('mdui-icon-wifi-1-bar--rounded')
], IconWifi_1Bar_Rounded);
export { IconWifi_1Bar_Rounded };
