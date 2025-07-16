import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBeenhere_Sharp = class IconBeenhere_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3.01 1 3 17l9 6 8.99-6L21 1H3.01zM10 16l-5-5 1.41-1.42L10 13.17l7.59-7.59L19 7l-9 9z"/>');
    }
};
IconBeenhere_Sharp.styles = style;
IconBeenhere_Sharp = __decorate([
    customElement('mdui-icon-beenhere--sharp')
], IconBeenhere_Sharp);
export { IconBeenhere_Sharp };
