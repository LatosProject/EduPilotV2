import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarViewDay = class IconCalendarViewDay extends LitElement {
    render() {
        return svgTag('<path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"/>');
    }
};
IconCalendarViewDay.styles = style;
IconCalendarViewDay = __decorate([
    customElement('mdui-icon-calendar-view-day')
], IconCalendarViewDay);
export { IconCalendarViewDay };
