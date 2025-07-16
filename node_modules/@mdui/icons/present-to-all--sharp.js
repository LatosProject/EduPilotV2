import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPresentToAll_Sharp = class IconPresentToAll_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v18h22V3zm-2 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z"/>');
    }
};
IconPresentToAll_Sharp.styles = style;
IconPresentToAll_Sharp = __decorate([
    customElement('mdui-icon-present-to-all--sharp')
], IconPresentToAll_Sharp);
export { IconPresentToAll_Sharp };
