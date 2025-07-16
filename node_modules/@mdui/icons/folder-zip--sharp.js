import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderZip_Sharp = class IconFolderZip_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m12 6-2-2H2v16h20V6H12zm6 6h-2v2h2v2h-2v2h-2v-2h2v-2h-2v-2h2v-2h-2V8h2v2h2v2z"/>');
    }
};
IconFolderZip_Sharp.styles = style;
IconFolderZip_Sharp = __decorate([
    customElement('mdui-icon-folder-zip--sharp')
], IconFolderZip_Sharp);
export { IconFolderZip_Sharp };
