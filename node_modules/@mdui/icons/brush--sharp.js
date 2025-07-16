import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrush_Sharp = class IconBrush_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm14.41-8.66-2.75-2.75L9 12.25 11.75 15l9.66-9.66z"/>');
    }
};
IconBrush_Sharp.styles = style;
IconBrush_Sharp = __decorate([
    customElement('mdui-icon-brush--sharp')
], IconBrush_Sharp);
export { IconBrush_Sharp };
