import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCalendarToday_TwoTone = class IconCalendarToday_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"/><path d="M4 5.01h16V8H4z" opacity=".3"/>');
    }
};
IconCalendarToday_TwoTone.styles = style;
IconCalendarToday_TwoTone = __decorate([
    customElement('mdui-icon-calendar-today--two-tone')
], IconCalendarToday_TwoTone);
export { IconCalendarToday_TwoTone };
