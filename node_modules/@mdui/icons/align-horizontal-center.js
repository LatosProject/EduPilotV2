import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignHorizontalCenter = class IconAlignHorizontalCenter extends LitElement {
    render() {
        return svgTag('<path d="M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z"/>');
    }
};
IconAlignHorizontalCenter.styles = style;
IconAlignHorizontalCenter = __decorate([
    customElement('mdui-icon-align-horizontal-center')
], IconAlignHorizontalCenter);
export { IconAlignHorizontalCenter };
