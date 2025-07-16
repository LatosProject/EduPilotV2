import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalSplit = class IconHorizontalSplit extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>');
    }
};
IconHorizontalSplit.styles = style;
IconHorizontalSplit = __decorate([
    customElement('mdui-icon-horizontal-split')
], IconHorizontalSplit);
export { IconHorizontalSplit };
