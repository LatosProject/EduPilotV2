import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPayments_Sharp = class IconPayments_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 7v13H4v-2h17V7h2zm-4 9H1V4h18v12zm-6-6c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3z"/>');
    }
};
IconPayments_Sharp.styles = style;
IconPayments_Sharp = __decorate([
    customElement('mdui-icon-payments--sharp')
], IconPayments_Sharp);
export { IconPayments_Sharp };
