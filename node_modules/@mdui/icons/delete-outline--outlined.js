import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeleteOutline_Outlined = class IconDeleteOutline_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4h-3.5z"/>');
    }
};
IconDeleteOutline_Outlined.styles = style;
IconDeleteOutline_Outlined = __decorate([
    customElement('mdui-icon-delete-outline--outlined')
], IconDeleteOutline_Outlined);
export { IconDeleteOutline_Outlined };
