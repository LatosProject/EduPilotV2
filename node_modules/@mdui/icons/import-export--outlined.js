import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconImportExport_Outlined = class IconImportExport_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 3 5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/>');
    }
};
IconImportExport_Outlined.styles = style;
IconImportExport_Outlined = __decorate([
    customElement('mdui-icon-import-export--outlined')
], IconImportExport_Outlined);
export { IconImportExport_Outlined };
