import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderCopy_Sharp = class IconFolderCopy_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 6H1v15h19v-2H3z"/><path d="M23 4h-9l-2-2H5.01L5 17h18V4z"/>');
    }
};
IconFolderCopy_Sharp.styles = style;
IconFolderCopy_Sharp = __decorate([
    customElement('mdui-icon-folder-copy--sharp')
], IconFolderCopy_Sharp);
export { IconFolderCopy_Sharp };
