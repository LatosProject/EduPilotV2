import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdUnits_Sharp = class IconAdUnits_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 1H5v22h14V1zm-2 18H7V5h10v14z"/><path d="M8 6h8v2H8z"/>');
    }
};
IconAdUnits_Sharp.styles = style;
IconAdUnits_Sharp = __decorate([
    customElement('mdui-icon-ad-units--sharp')
], IconAdUnits_Sharp);
export { IconAdUnits_Sharp };
