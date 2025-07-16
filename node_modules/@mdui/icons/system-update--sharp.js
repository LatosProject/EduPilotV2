import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSystemUpdate_Sharp = class IconSystemUpdate_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 1v22h14V1H5zm12 18H7V5h10v14zm-1-6h-3V8h-2v5H8l4 4 4-4z"/>');
    }
};
IconSystemUpdate_Sharp.styles = style;
IconSystemUpdate_Sharp = __decorate([
    customElement('mdui-icon-system-update--sharp')
], IconSystemUpdate_Sharp);
export { IconSystemUpdate_Sharp };
