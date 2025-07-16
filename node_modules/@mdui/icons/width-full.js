import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthFull = class IconWidthFull extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h1v12H4V6zm16 12h-1V6h1v12z"/>');
    }
};
IconWidthFull.styles = style;
IconWidthFull = __decorate([
    customElement('mdui-icon-width-full')
], IconWidthFull);
export { IconWidthFull };
