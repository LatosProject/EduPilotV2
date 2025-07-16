import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarViewDay_Sharp = class IconCalendarViewDay_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 17h18v2H3v-2zm0-7h18v5H3v-5zm0-4h18v2H3V6z"/>');
    }
};
IconCalendarViewDay_Sharp.styles = style;
IconCalendarViewDay_Sharp = __decorate([
    customElement('mdui-icon-calendar-view-day--sharp')
], IconCalendarViewDay_Sharp);
export { IconCalendarViewDay_Sharp };
