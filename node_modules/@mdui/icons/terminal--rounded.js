import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTerminal_Rounded = class IconTerminal_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H4V8h16v10zm-8-2c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1h-4c-.55 0-1-.45-1-1zM6.79 9.71a.996.996 0 0 1 1.41 0l2.59 2.59c.39.39.39 1.02 0 1.41L8.2 16.3a.996.996 0 1 1-1.41-1.41L8.67 13l-1.88-1.88a.996.996 0 0 1 0-1.41z"/>');
    }
};
IconTerminal_Rounded.styles = style;
IconTerminal_Rounded = __decorate([
    customElement('mdui-icon-terminal--rounded')
], IconTerminal_Rounded);
export { IconTerminal_Rounded };
