import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMoney_Sharp = class IconMoney_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 16h5V8h-5v8zm2-6h1v4h-1v-4zm-8 6h5V8H8v8zm2-6h1v4h-1v-4zM5 8h2v8H5zM2 4v16h20V4H2zm18 14H4V6h16v12z"/>');
    }
};
IconMoney_Sharp.styles = style;
IconMoney_Sharp = __decorate([
    customElement('mdui-icon-money--sharp')
], IconMoney_Sharp);
export { IconMoney_Sharp };
