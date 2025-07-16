import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMissedOutgoing_TwoTone = class IconCallMissedOutgoing_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 10.41V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41l9 9z"/>');
    }
};
IconCallMissedOutgoing_TwoTone.styles = style;
IconCallMissedOutgoing_TwoTone = __decorate([
    customElement('mdui-icon-call-missed-outgoing--two-tone')
], IconCallMissedOutgoing_TwoTone);
export { IconCallMissedOutgoing_TwoTone };
