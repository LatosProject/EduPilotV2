import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAtm_Sharp = class IconAtm_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M8 9v1.5h2.25V15h1.5v-4.5H14V9H8zM7 9H2v6h1.5v-1.5h2V15H7V9zm-1.5 3h-2v-1.5h2V12zM22 9h-6.5v6H17v-4.5h1V14h1.5v-3.51h1V15H22V9z"/>');
    }
};
IconAtm_Sharp.styles = style;
IconAtm_Sharp = __decorate([
    customElement('mdui-icon-atm--sharp')
], IconAtm_Sharp);
export { IconAtm_Sharp };
