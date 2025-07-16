import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon4gMobiledata_Sharp = class Icon4gMobiledata_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9V7zm8 4v2h2v2h-5V9h7V7h-9v10h9v-6h-4z"/>');
    }
};
Icon4gMobiledata_Sharp.styles = style;
Icon4gMobiledata_Sharp = __decorate([
    customElement('mdui-icon-4g-mobiledata--sharp')
], Icon4gMobiledata_Sharp);
export { Icon4gMobiledata_Sharp };
