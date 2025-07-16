import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPresentToAll_TwoTone = class IconPresentToAll_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19.02h18V4.98H3v14.04zM12 8l4 4h-2v4h-4v-4H8l4-4z" opacity=".3"/><path d="M10 16h4v-4h2l-4-4-4 4h2zM21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04z"/>');
    }
};
IconPresentToAll_TwoTone.styles = style;
IconPresentToAll_TwoTone = __decorate([
    customElement('mdui-icon-present-to-all--two-tone')
], IconPresentToAll_TwoTone);
export { IconPresentToAll_TwoTone };
