import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSort_Outlined = class IconSort_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>');
    }
};
IconSort_Outlined.styles = style;
IconSort_Outlined = __decorate([
    customElement('mdui-icon-sort--outlined')
], IconSort_Outlined);
export { IconSort_Outlined };
