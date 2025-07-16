import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCreditScore_Sharp = class IconCreditScore_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 4v16h7v-2H4v-6h18V4H2zm18 4H4V6h16v2zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41-5.66 5.65z"/>');
    }
};
IconCreditScore_Sharp.styles = style;
IconCreditScore_Sharp = __decorate([
    customElement('mdui-icon-credit-score--sharp')
], IconCreditScore_Sharp);
export { IconCreditScore_Sharp };
