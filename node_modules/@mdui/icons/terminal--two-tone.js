import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTerminal_TwoTone = class IconTerminal_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 18h16V8H4v10zm8-3h6v2h-6v-2zm-5.91-4.59L7.5 9l4 4-4 4-1.41-1.41L8.67 13l-2.58-2.59z" opacity=".3"/><path d="M12 15h6v2h-6z"/><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H4V8h16v10z"/><path d="m7.5 17 4-4-4-4-1.41 1.41L8.67 13l-2.58 2.59z"/>');
    }
};
IconTerminal_TwoTone.styles = style;
IconTerminal_TwoTone = __decorate([
    customElement('mdui-icon-terminal--two-tone')
], IconTerminal_TwoTone);
export { IconTerminal_TwoTone };
