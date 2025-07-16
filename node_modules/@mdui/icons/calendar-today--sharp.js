import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarToday_Sharp = class IconCalendarToday_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20V3zm-2 18H4V8h16v13z"/>');
    }
};
IconCalendarToday_Sharp.styles = style;
IconCalendarToday_Sharp = __decorate([
    customElement('mdui-icon-calendar-today--sharp')
], IconCalendarToday_Sharp);
export { IconCalendarToday_Sharp };
