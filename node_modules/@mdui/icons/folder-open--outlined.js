import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderOpen_Outlined = class IconFolderOpen_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>');
    }
};
IconFolderOpen_Outlined.styles = style;
IconFolderOpen_Outlined = __decorate([
    customElement('mdui-icon-folder-open--outlined')
], IconFolderOpen_Outlined);
export { IconFolderOpen_Outlined };
