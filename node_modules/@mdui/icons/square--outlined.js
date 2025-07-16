import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSquare_Outlined = class IconSquare_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/>');
    }
};
IconSquare_Outlined.styles = style;
IconSquare_Outlined = __decorate([
    customElement('mdui-icon-square--outlined')
], IconSquare_Outlined);
export { IconSquare_Outlined };
