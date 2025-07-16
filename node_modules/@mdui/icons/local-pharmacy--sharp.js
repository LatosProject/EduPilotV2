import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalPharmacy_Sharp = class IconLocalPharmacy_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"/>');
    }
};
IconLocalPharmacy_Sharp.styles = style;
IconLocalPharmacy_Sharp = __decorate([
    customElement('mdui-icon-local-pharmacy--sharp')
], IconLocalPharmacy_Sharp);
export { IconLocalPharmacy_Sharp };
