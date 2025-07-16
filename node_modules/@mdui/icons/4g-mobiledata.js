import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon4gMobiledata = class Icon4gMobiledata extends LitElement {
    render() {
        return svgTag('<path d="M9 7H7v5H5V7H3v7h4v3h2v-3h2v-2H9V7zm8 4v2h2v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4z"/>');
    }
};
Icon4gMobiledata.styles = style;
Icon4gMobiledata = __decorate([
    customElement('mdui-icon-4g-mobiledata')
], Icon4gMobiledata);
export { Icon4gMobiledata };
