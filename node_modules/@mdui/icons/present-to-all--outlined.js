import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPresentToAll_Outlined = class IconPresentToAll_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"/>');
    }
};
IconPresentToAll_Outlined.styles = style;
IconPresentToAll_Outlined = __decorate([
    customElement('mdui-icon-present-to-all--outlined')
], IconPresentToAll_Outlined);
export { IconPresentToAll_Outlined };
