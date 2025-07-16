import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDelete_Outlined = class IconDelete_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/>');
    }
};
IconDelete_Outlined.styles = style;
IconDelete_Outlined = __decorate([
    customElement('mdui-icon-delete--outlined')
], IconDelete_Outlined);
export { IconDelete_Outlined };
