import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewDay_Outlined = class IconViewDay_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z"/>');
    }
};
IconViewDay_Outlined.styles = style;
IconViewDay_Outlined = __decorate([
    customElement('mdui-icon-view-day--outlined')
], IconViewDay_Outlined);
export { IconViewDay_Outlined };
