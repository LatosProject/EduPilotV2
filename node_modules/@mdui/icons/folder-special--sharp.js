import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderSpecial_Sharp = class IconFolderSpecial_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6H12l-2-2H2v16h20V6zm-4.06 11L15 15.28 12.06 17l.78-3.33-2.59-2.24 3.41-.29L15 8l1.34 3.14 3.41.29-2.59 2.24.78 3.33z"/>');
    }
};
IconFolderSpecial_Sharp.styles = style;
IconFolderSpecial_Sharp = __decorate([
    customElement('mdui-icon-folder-special--sharp')
], IconFolderSpecial_Sharp);
export { IconFolderSpecial_Sharp };
