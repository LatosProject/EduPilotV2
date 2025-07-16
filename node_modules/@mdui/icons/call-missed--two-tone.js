import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMissed_TwoTone = class IconCallMissed_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m5 10.41 7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z"/>');
    }
};
IconCallMissed_TwoTone.styles = style;
IconCallMissed_TwoTone = __decorate([
    customElement('mdui-icon-call-missed--two-tone')
], IconCallMissed_TwoTone);
export { IconCallMissed_TwoTone };
