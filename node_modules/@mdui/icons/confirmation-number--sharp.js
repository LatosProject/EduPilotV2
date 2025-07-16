import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconConfirmationNumber_Sharp = class IconConfirmationNumber_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 10V4H2.01v6c1.1 0 1.99.9 1.99 2s-.89 2-2 2v6h20v-6c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z"/>');
    }
};
IconConfirmationNumber_Sharp.styles = style;
IconConfirmationNumber_Sharp = __decorate([
    customElement('mdui-icon-confirmation-number--sharp')
], IconConfirmationNumber_Sharp);
export { IconConfirmationNumber_Sharp };
