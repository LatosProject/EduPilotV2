import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSsidChart_Outlined = class IconSsidChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 5.47 12 12 7.62 7.62 3 11V8.52L7.83 5l4.38 4.38L21 3v2.47zM21 15h-4.7l-4.17 3.34L6 12.41l-3 2.13V17l2.8-2 6.2 6 5-4h4v-2z"/>');
    }
};
IconSsidChart_Outlined.styles = style;
IconSsidChart_Outlined = __decorate([
    customElement('mdui-icon-ssid-chart--outlined')
], IconSsidChart_Outlined);
export { IconSsidChart_Outlined };
