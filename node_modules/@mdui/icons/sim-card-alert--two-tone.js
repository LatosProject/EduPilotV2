import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSimCardAlert_TwoTone = class IconSimCardAlert_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 8.83V20h12V4h-7.17L6 8.83zM11 8h2v5h-2V8zm0 7h2v2h-2v-2z" opacity=".3"/><path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16z"/><path d="M11 15h2v2h-2zm0-7h2v5h-2z"/>');
    }
};
IconSimCardAlert_TwoTone.styles = style;
IconSimCardAlert_TwoTone = __decorate([
    customElement('mdui-icon-sim-card-alert--two-tone')
], IconSimCardAlert_TwoTone);
export { IconSimCardAlert_TwoTone };
