import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEditCalendar_Sharp = class IconEditCalendar_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7v2zm10.13-5.01 1.41-1.41-2.12-2.12-1.41 1.41 2.12 2.12zm-.71.71-5.3 5.3H14v-2.12l5.3-5.3 2.12 2.12z"/>');
    }
};
IconEditCalendar_Sharp.styles = style;
IconEditCalendar_Sharp = __decorate([
    customElement('mdui-icon-edit-calendar--sharp')
], IconEditCalendar_Sharp);
export { IconEditCalendar_Sharp };
