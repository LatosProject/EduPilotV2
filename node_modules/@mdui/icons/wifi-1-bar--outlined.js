import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWifi_1Bar_Outlined = class IconWifi_1Bar_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15.53 17.46 12 21l-3.53-3.54c.9-.9 2.15-1.46 3.53-1.46s2.63.56 3.53 1.46z"/>');
    }
};
IconWifi_1Bar_Outlined.styles = style;
IconWifi_1Bar_Outlined = __decorate([
    customElement('mdui-icon-wifi-1-bar--outlined')
], IconWifi_1Bar_Outlined);
export { IconWifi_1Bar_Outlined };
