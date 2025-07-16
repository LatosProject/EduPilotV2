import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalSplit_TwoTone = class IconHorizontalSplit_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 15v2H5v-2h14m2-10H3v2h18V5zm0 4H3v2h18V9zm0 4H3v6h18v-6z"/><path d="M5 15h14v2H5z" opacity=".3"/>');
    }
};
IconHorizontalSplit_TwoTone.styles = style;
IconHorizontalSplit_TwoTone = __decorate([
    customElement('mdui-icon-horizontal-split--two-tone')
], IconHorizontalSplit_TwoTone);
export { IconHorizontalSplit_TwoTone };
