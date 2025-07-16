import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWeb_TwoTone = class IconWeb_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 9h10.5v3.5H4zm0 5.5h10.5V18H4zM16.5 9H20v9h-3.5z" opacity=".3"/><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5.5 14H4v-3.5h10.5V18zm0-5.5H4V9h10.5v3.5zM20 18h-3.5V9H20v9z"/>');
    }
};
IconWeb_TwoTone.styles = style;
IconWeb_TwoTone = __decorate([
    customElement('mdui-icon-web--two-tone')
], IconWeb_TwoTone);
export { IconWeb_TwoTone };
