import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCoffeeMaker_Sharp = class IconCoffeeMaker_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 7V4h2V2H4v20h16v-2h-4.03A4.966 4.966 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3h10z"/><circle cx="13" cy="9" r="1"/>');
    }
};
IconCoffeeMaker_Sharp.styles = style;
IconCoffeeMaker_Sharp = __decorate([
    customElement('mdui-icon-coffee-maker--sharp')
], IconCoffeeMaker_Sharp);
export { IconCoffeeMaker_Sharp };
