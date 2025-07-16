import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalSplit_Outlined = class IconHorizontalSplit_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z"/>');
    }
};
IconHorizontalSplit_Outlined.styles = style;
IconHorizontalSplit_Outlined = __decorate([
    customElement('mdui-icon-horizontal-split--outlined')
], IconHorizontalSplit_Outlined);
export { IconHorizontalSplit_Outlined };
