import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarViewWeek_Sharp = class IconCalendarViewWeek_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zm-9 2h2.5v12H13V6zm-2 12H8.5V6H11v12zM4 6h2.5v12H4V6zm16 12h-2.5V6H20v12z"/>');
    }
};
IconCalendarViewWeek_Sharp.styles = style;
IconCalendarViewWeek_Sharp = __decorate([
    customElement('mdui-icon-calendar-view-week--sharp')
], IconCalendarViewWeek_Sharp);
export { IconCalendarViewWeek_Sharp };
