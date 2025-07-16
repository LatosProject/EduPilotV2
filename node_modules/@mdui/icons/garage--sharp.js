import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGarage_Sharp = class IconGarage_Sharp extends LitElement {
    render() {
        return svgTag('<circle cx="15" cy="13" r="1"/><circle cx="9" cy="13" r="1"/><path d="m8.33 7.5-.66 2h8.66l-.66-2z"/><path d="M22 2H2v20h20V2zm-3 16.5h-2v-2H7v2H5v-7.31L6.89 5.5H17.1l1.9 5.69v7.31z"/>');
    }
};
IconGarage_Sharp.styles = style;
IconGarage_Sharp = __decorate([
    customElement('mdui-icon-garage--sharp')
], IconGarage_Sharp);
export { IconGarage_Sharp };
