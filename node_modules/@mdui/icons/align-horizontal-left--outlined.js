import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignHorizontalLeft_Outlined = class IconAlignHorizontalLeft_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"/>');
    }
};
IconAlignHorizontalLeft_Outlined.styles = style;
IconAlignHorizontalLeft_Outlined = __decorate([
    customElement('mdui-icon-align-horizontal-left--outlined')
], IconAlignHorizontalLeft_Outlined);
export { IconAlignHorizontalLeft_Outlined };
