import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKitchen_Sharp = class IconKitchen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2.01 4 2v20h16V2.01zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8V5zm0 7h2v5H8v-5z"/>');
    }
};
IconKitchen_Sharp.styles = style;
IconKitchen_Sharp = __decorate([
    customElement('mdui-icon-kitchen--sharp')
], IconKitchen_Sharp);
export { IconKitchen_Sharp };
