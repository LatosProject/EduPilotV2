import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRepeat_Outlined = class IconRepeat_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>');
    }
};
IconRepeat_Outlined.styles = style;
IconRepeat_Outlined = __decorate([
    customElement('mdui-icon-repeat--outlined')
], IconRepeat_Outlined);
export { IconRepeat_Outlined };
