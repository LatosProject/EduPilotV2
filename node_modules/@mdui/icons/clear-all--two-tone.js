import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconClearAll_TwoTone = class IconClearAll_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z"/>');
    }
};
IconClearAll_TwoTone.styles = style;
IconClearAll_TwoTone = __decorate([
    customElement('mdui-icon-clear-all--two-tone')
], IconClearAll_TwoTone);
export { IconClearAll_TwoTone };
