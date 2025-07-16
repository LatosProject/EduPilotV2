import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatClear_Sharp = class IconFormatClear_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 8V5H6.39l3 3h1.83l-.55 1.28 2.09 2.1L14.21 8zM3.41 4.86 2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21l1.41-1.41z"/>');
    }
};
IconFormatClear_Sharp.styles = style;
IconFormatClear_Sharp = __decorate([
    customElement('mdui-icon-format-clear--sharp')
], IconFormatClear_Sharp);
export { IconFormatClear_Sharp };
