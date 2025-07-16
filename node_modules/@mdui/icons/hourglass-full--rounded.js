import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassFull_Rounded = class IconHourglassFull_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M6 4v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2z"/>');
    }
};
IconHourglassFull_Rounded.styles = style;
IconHourglassFull_Rounded = __decorate([
    customElement('mdui-icon-hourglass-full--rounded')
], IconHourglassFull_Rounded);
export { IconHourglassFull_Rounded };
