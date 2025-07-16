import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeleteOutline_Sharp = class IconDeleteOutline_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 21h12V7H6v14zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"/>');
    }
};
IconDeleteOutline_Sharp.styles = style;
IconDeleteOutline_Sharp = __decorate([
    customElement('mdui-icon-delete-outline--sharp')
], IconDeleteOutline_Sharp);
export { IconDeleteOutline_Sharp };
