import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterHdr_TwoTone = class IconFilterHdr_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 16h3.04l-1.52-2.03z" opacity=".3"/><path d="m9.78 11.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6l-4.22 5.63zM5 16l1.52-2.03L8.04 16H5z"/>');
    }
};
IconFilterHdr_TwoTone.styles = style;
IconFilterHdr_TwoTone = __decorate([
    customElement('mdui-icon-filter-hdr--two-tone')
], IconFilterHdr_TwoTone);
export { IconFilterHdr_TwoTone };
