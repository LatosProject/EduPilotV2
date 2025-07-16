import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInventory_2_Sharp = class IconInventory_2_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 2v6.7h1V22h18V8.7h1V2H2zm13 12H9v-2h6v2zm5-7H4V4h16v3z"/>');
    }
};
IconInventory_2_Sharp.styles = style;
IconInventory_2_Sharp = __decorate([
    customElement('mdui-icon-inventory-2--sharp')
], IconInventory_2_Sharp);
export { IconInventory_2_Sharp };
