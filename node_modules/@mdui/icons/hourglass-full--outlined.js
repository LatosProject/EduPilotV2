import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassFull_Outlined = class IconHourglassFull_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"/>');
    }
};
IconHourglassFull_Outlined.styles = style;
IconHourglassFull_Outlined = __decorate([
    customElement('mdui-icon-hourglass-full--outlined')
], IconHourglassFull_Outlined);
export { IconHourglassFull_Outlined };
