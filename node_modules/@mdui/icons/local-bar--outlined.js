import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalBar_Outlined = class IconLocalBar_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14.77 9 12 12.11 9.23 9h5.54M21 3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9V3zM7.43 7 5.66 5h12.69l-1.78 2H7.43z"/>');
    }
};
IconLocalBar_Outlined.styles = style;
IconLocalBar_Outlined = __decorate([
    customElement('mdui-icon-local-bar--outlined')
], IconLocalBar_Outlined);
export { IconLocalBar_Outlined };
