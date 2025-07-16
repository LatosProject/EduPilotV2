import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdUnits_Outlined = class IconAdUnits_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7zm0 3v-1h10v1H7z"/><path d="M16 7H8v2h8V7z"/>');
    }
};
IconAdUnits_Outlined.styles = style;
IconAdUnits_Outlined = __decorate([
    customElement('mdui-icon-ad-units--outlined')
], IconAdUnits_Outlined);
export { IconAdUnits_Outlined };
