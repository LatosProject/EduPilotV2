import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalAtm_Sharp = class IconLocalAtm_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11 17h2v-1h2v-5h-4v-1h4V8h-2V7h-2v1H9v5h4v1H9v2h2v1zM22 4H2.01L2 20h20V4zm-2 14H4V6h16v12z"/>');
    }
};
IconLocalAtm_Sharp.styles = style;
IconLocalAtm_Sharp = __decorate([
    customElement('mdui-icon-local-atm--sharp')
], IconLocalAtm_Sharp);
export { IconLocalAtm_Sharp };
