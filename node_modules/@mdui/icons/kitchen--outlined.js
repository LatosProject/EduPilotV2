import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKitchen_Outlined = class IconKitchen_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M8 5h2v3H8zm0 7h2v5H8zm10-9.99L6 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5z"/>');
    }
};
IconKitchen_Outlined.styles = style;
IconKitchen_Outlined = __decorate([
    customElement('mdui-icon-kitchen--outlined')
], IconKitchen_Outlined);
export { IconKitchen_Outlined };
