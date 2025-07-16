import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPayment_Sharp = class IconPayment_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4H2v16h20V4zm-2 14H4v-6h16v6zm0-10H4V6h16v2z"/>');
    }
};
IconPayment_Sharp.styles = style;
IconPayment_Sharp = __decorate([
    customElement('mdui-icon-payment--sharp')
], IconPayment_Sharp);
export { IconPayment_Sharp };
