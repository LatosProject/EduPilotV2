import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowCircleRight = class IconArrowCircleRight extends LitElement {
    render() {
        return svgTag('<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-10 1H8v-2h4V8l4 4-4 4v-3z"/>');
    }
};
IconArrowCircleRight.styles = style;
IconArrowCircleRight = __decorate([
    customElement('mdui-icon-arrow-circle-right')
], IconArrowCircleRight);
export { IconArrowCircleRight };
