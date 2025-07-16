import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderOff_Sharp = class IconFolderOff_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m12 6-2-2H6.83L22 19.17V6zM2.1 2.1.69 3.51 2 4.83V20h15.17l3.32 3.31 1.41-1.41z"/>');
    }
};
IconFolderOff_Sharp.styles = style;
IconFolderOff_Sharp = __decorate([
    customElement('mdui-icon-folder-off--sharp')
], IconFolderOff_Sharp);
export { IconFolderOff_Sharp };
