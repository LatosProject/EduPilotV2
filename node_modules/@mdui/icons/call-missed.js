import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMissed = class IconCallMissed extends LitElement {
    render() {
        return svgTag('<path d="M19.59 7 12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/>');
    }
};
IconCallMissed.styles = style;
IconCallMissed = __decorate([
    customElement('mdui-icon-call-missed')
], IconCallMissed);
export { IconCallMissed };
