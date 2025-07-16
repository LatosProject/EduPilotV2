import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInventory_2_Outlined = class IconInventory_2_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-1 18H5V9h14v11zm1-13H4V4h16v3z"/><path d="M9 12h6v2H9z"/>');
    }
};
IconInventory_2_Outlined.styles = style;
IconInventory_2_Outlined = __decorate([
    customElement('mdui-icon-inventory-2--outlined')
], IconInventory_2_Outlined);
export { IconInventory_2_Outlined };
