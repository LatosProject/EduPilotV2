import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderShared_Sharp = class IconFolderShared_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6H12l-2-2H2v16h20V6zm-7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/>');
    }
};
IconFolderShared_Sharp.styles = style;
IconFolderShared_Sharp = __decorate([
    customElement('mdui-icon-folder-shared--sharp')
], IconFolderShared_Sharp);
export { IconFolderShared_Sharp };
