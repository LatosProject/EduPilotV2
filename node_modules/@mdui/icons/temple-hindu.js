import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTempleHindu = class IconTempleHindu extends LitElement {
    render() {
        return svgTag('<path d="M6.6 11h10.8l-.9-3h-9zM20 11v2H4v-2H2v11h8v-5h4v5h8V11zm-4.1-5L15 3V1h-2v2h-2.03V1h-2v2.12L8.1 6z"/>');
    }
};
IconTempleHindu.styles = style;
IconTempleHindu = __decorate([
    customElement('mdui-icon-temple-hindu')
], IconTempleHindu);
export { IconTempleHindu };
