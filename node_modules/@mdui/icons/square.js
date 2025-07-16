import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSquare = class IconSquare extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v18H3z"/>');
    }
};
IconSquare.styles = style;
IconSquare = __decorate([
    customElement('mdui-icon-square')
], IconSquare);
export { IconSquare };
