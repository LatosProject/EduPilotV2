import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEventSeat_Outlined = class IconEventSeat_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 5v7H9V5h6m0-2H9c-1.1 0-2 .9-2 2v9h10V5c0-1.1-.9-2-2-2zm7 7h-3v3h3v-3zM5 10H2v3h3v-3zm15 5H4v6h2v-4h12v4h2v-6z"/>');
    }
};
IconEventSeat_Outlined.styles = style;
IconEventSeat_Outlined = __decorate([
    customElement('mdui-icon-event-seat--outlined')
], IconEventSeat_Outlined);
export { IconEventSeat_Outlined };
