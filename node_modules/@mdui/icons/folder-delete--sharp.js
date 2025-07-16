import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderDelete_Sharp = class IconFolderDelete_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6v14H2V4h8l2 2h10zm-5.5 4V9h-2v1H12v1.5h1V17h5v-5.5h1V10h-2.5zm0 5.5h-2v-4h2v4z"/>');
    }
};
IconFolderDelete_Sharp.styles = style;
IconFolderDelete_Sharp = __decorate([
    customElement('mdui-icon-folder-delete--sharp')
], IconFolderDelete_Sharp);
export { IconFolderDelete_Sharp };
