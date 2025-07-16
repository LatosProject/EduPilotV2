import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSystemUpdate_Outlined = class IconSystemUpdate_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"/>');
    }
};
IconSystemUpdate_Outlined.styles = style;
IconSystemUpdate_Outlined = __decorate([
    customElement('mdui-icon-system-update--outlined')
], IconSystemUpdate_Outlined);
export { IconSystemUpdate_Outlined };
