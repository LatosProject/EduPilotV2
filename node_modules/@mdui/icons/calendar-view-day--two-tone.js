import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarViewDay_TwoTone = class IconCalendarViewDay_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z"/><path d="M5 12h14v1H5z" opacity=".3"/>');
    }
};
IconCalendarViewDay_TwoTone.styles = style;
IconCalendarViewDay_TwoTone = __decorate([
    customElement('mdui-icon-calendar-view-day--two-tone')
], IconCalendarViewDay_TwoTone);
export { IconCalendarViewDay_TwoTone };
