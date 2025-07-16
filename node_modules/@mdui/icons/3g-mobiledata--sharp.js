import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon3gMobiledata_Sharp = class Icon3gMobiledata_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 7v2h5v2H4v2h4v2H3v2h7V7H3zm18 4v6h-9V7h9v2h-7v6h5v-2h-2.5v-2H21z"/>');
    }
};
Icon3gMobiledata_Sharp.styles = style;
Icon3gMobiledata_Sharp = __decorate([
    customElement('mdui-icon-3g-mobiledata--sharp')
], Icon3gMobiledata_Sharp);
export { Icon3gMobiledata_Sharp };
