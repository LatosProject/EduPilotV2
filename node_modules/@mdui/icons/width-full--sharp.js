import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthFull_Sharp = class IconWidthFull_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zM4 6h1v12H4V6zm16 12h-1V6h1v12z"/>');
    }
};
IconWidthFull_Sharp.styles = style;
IconWidthFull_Sharp = __decorate([
    customElement('mdui-icon-width-full--sharp')
], IconWidthFull_Sharp);
export { IconWidthFull_Sharp };
