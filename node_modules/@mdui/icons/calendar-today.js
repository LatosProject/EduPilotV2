import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarToday = class IconCalendarToday extends LitElement {
    render() {
        return svgTag('<path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/>');
    }
};
IconCalendarToday.styles = style;
IconCalendarToday = __decorate([
    customElement('mdui-icon-calendar-today')
], IconCalendarToday);
export { IconCalendarToday };
