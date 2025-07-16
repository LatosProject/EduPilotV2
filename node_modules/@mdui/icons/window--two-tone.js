import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWindow_TwoTone = class IconWindow_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13 13h6v6h-6zm-8 0h6v6H5zm0-8h6v6H5zm8 0h6v6h-6z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>');
    }
};
IconWindow_TwoTone.styles = style;
IconWindow_TwoTone = __decorate([
    customElement('mdui-icon-window--two-tone')
], IconWindow_TwoTone);
export { IconWindow_TwoTone };
