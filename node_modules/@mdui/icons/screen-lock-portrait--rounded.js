import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScreenLockPortrait_Rounded = class IconScreenLockPortrait_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 1.99 2 1.99L17 23c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z"/><path d="M14 11v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z"/>');
    }
};
IconScreenLockPortrait_Rounded.styles = style;
IconScreenLockPortrait_Rounded = __decorate([
    customElement('mdui-icon-screen-lock-portrait--rounded')
], IconScreenLockPortrait_Rounded);
export { IconScreenLockPortrait_Rounded };
