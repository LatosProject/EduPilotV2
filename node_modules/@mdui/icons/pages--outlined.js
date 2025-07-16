import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPages_Outlined = class IconPages_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 2h6v6h-3l1-4-4 1V5zM5 5h6v3L7 7l1 4H5V5zm6 14H5v-6h3l-1 4 4-1v3zm8 0h-6v-3l4 1-1-4h3v6zm-4.37-4.37L12 13.72l-2.63.91.91-2.63-.91-2.63 2.63.91 2.63-.91-.91 2.63.91 2.63z"/>');
    }
};
IconPages_Outlined.styles = style;
IconPages_Outlined = __decorate([
    customElement('mdui-icon-pages--outlined')
], IconPages_Outlined);
export { IconPages_Outlined };
