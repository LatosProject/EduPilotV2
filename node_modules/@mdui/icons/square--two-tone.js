import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSquare_TwoTone = class IconSquare_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5h14v14H5z" opacity=".3"/><path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>');
    }
};
IconSquare_TwoTone.styles = style;
IconSquare_TwoTone = __decorate([
    customElement('mdui-icon-square--two-tone')
], IconSquare_TwoTone);
export { IconSquare_TwoTone };
