import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCodeOff = class IconCodeOff extends LitElement {
    render() {
        return svgTag('<path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z"/>');
    }
};
IconCodeOff.styles = style;
IconCodeOff = __decorate([
    customElement('mdui-icon-code-off')
], IconCodeOff);
export { IconCodeOff };
