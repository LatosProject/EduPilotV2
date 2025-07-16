import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMissedOutgoing_Rounded = class IconCallMissedOutgoing_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m3.7 9.11 7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59 5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41z"/>');
    }
};
IconCallMissedOutgoing_Rounded.styles = style;
IconCallMissedOutgoing_Rounded = __decorate([
    customElement('mdui-icon-call-missed-outgoing--rounded')
], IconCallMissedOutgoing_Rounded);
export { IconCallMissedOutgoing_Rounded };
