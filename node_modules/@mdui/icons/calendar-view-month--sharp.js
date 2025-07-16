import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarViewMonth_Sharp = class IconCalendarViewMonth_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM8 11H4V6h4v5zm6 0h-4V6h4v5zm6 0h-4V6h4v5zM8 18H4v-5h4v5zm6 0h-4v-5h4v5zm6 0h-4v-5h4v5z"/>');
    }
};
IconCalendarViewMonth_Sharp.styles = style;
IconCalendarViewMonth_Sharp = __decorate([
    customElement('mdui-icon-calendar-view-month--sharp')
], IconCalendarViewMonth_Sharp);
export { IconCalendarViewMonth_Sharp };
