import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEventSeat_TwoTone = class IconEventSeat_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 5h6v7H9z" opacity=".3"/><path d="M4 21h2v-4h12v4h2v-6H4zM17 5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v9h10V5zm-2 7H9V5h6v7zm4-2h3v3h-3zM2 10h3v3H2z"/>');
    }
};
IconEventSeat_TwoTone.styles = style;
IconEventSeat_TwoTone = __decorate([
    customElement('mdui-icon-event-seat--two-tone')
], IconEventSeat_TwoTone);
export { IconEventSeat_TwoTone };
