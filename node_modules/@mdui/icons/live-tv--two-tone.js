import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLiveTv_TwoTone = class IconLiveTv_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 20h18V8H3v12zm6-10 7 4-7 4v-8z" opacity=".3"/><path d="M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z"/>');
    }
};
IconLiveTv_TwoTone.styles = style;
IconLiveTv_TwoTone = __decorate([
    customElement('mdui-icon-live-tv--two-tone')
], IconLiveTv_TwoTone);
export { IconLiveTv_TwoTone };
