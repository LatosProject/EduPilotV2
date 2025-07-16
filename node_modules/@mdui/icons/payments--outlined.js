import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPayments_Outlined = class IconPayments_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H3V6h14v8zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm13 0v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"/>');
    }
};
IconPayments_Outlined.styles = style;
IconPayments_Outlined = __decorate([
    customElement('mdui-icon-payments--outlined')
], IconPayments_Outlined);
export { IconPayments_Outlined };
