import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderOpen_TwoTone = class IconFolderOpen_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 8h16v10H4z" opacity=".3"/><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>');
    }
};
IconFolderOpen_TwoTone.styles = style;
IconFolderOpen_TwoTone = __decorate([
    customElement('mdui-icon-folder-open--two-tone')
], IconFolderOpen_TwoTone);
export { IconFolderOpen_TwoTone };
