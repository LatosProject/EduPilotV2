import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconClearAll_Sharp = class IconClearAll_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"/>');
    }
};
IconClearAll_Sharp.styles = style;
IconClearAll_Sharp = __decorate([
    customElement('mdui-icon-clear-all--sharp')
], IconClearAll_Sharp);
export { IconClearAll_Sharp };
