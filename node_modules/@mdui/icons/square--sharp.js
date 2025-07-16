import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSquare_Sharp = class IconSquare_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3h18v18H3z"/>');
    }
};
IconSquare_Sharp.styles = style;
IconSquare_Sharp = __decorate([
    customElement('mdui-icon-square--sharp')
], IconSquare_Sharp);
export { IconSquare_Sharp };
