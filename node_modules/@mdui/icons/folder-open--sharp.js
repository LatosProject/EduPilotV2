import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderOpen_Sharp = class IconFolderOpen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6H12l-2-2H2v16h20V6zm-2 12H4V8h16v10z"/>');
    }
};
IconFolderOpen_Sharp.styles = style;
IconFolderOpen_Sharp = __decorate([
    customElement('mdui-icon-folder-open--sharp')
], IconFolderOpen_Sharp);
export { IconFolderOpen_Sharp };
