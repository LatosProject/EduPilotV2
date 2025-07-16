import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCodeOff_Outlined = class IconCodeOff_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m19.17 12-4.58-4.59L16 6l6 6-3.59 3.59L17 14.17 19.17 12zM1.39 4.22l4.19 4.19L2 12l6 6 1.41-1.41L4.83 12 7 9.83l12.78 12.78 1.41-1.41L2.81 2.81 1.39 4.22z"/>');
    }
};
IconCodeOff_Outlined.styles = style;
IconCodeOff_Outlined = __decorate([
    customElement('mdui-icon-code-off--outlined')
], IconCodeOff_Outlined);
export { IconCodeOff_Outlined };
