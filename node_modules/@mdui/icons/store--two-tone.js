import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStore_TwoTone = class IconStore_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m5.64 9-.6 3h13.92l-.6-3z" opacity=".3"/><path d="M4 4h16v2H4zm16 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zm-8 11H6v-4h6v4zm-6.96-6 .6-3h12.72l.6 3H5.04z"/>');
    }
};
IconStore_TwoTone.styles = style;
IconStore_TwoTone = __decorate([
    customElement('mdui-icon-store--two-tone')
], IconStore_TwoTone);
export { IconStore_TwoTone };
