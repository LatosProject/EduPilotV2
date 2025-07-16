import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInventory_Sharp = class IconInventory_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 5h2v3h10V5h2v5h2V3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h8v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/><path d="M21 11.5 15.51 17l-3.01-3-1.5 1.5 4.51 4.5 6.99-7z"/>');
    }
};
IconInventory_Sharp.styles = style;
IconInventory_Sharp = __decorate([
    customElement('mdui-icon-inventory--sharp')
], IconInventory_Sharp);
export { IconInventory_Sharp };
