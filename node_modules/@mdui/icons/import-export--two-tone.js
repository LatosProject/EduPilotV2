import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconImportExport_TwoTone = class IconImportExport_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 6.99h3V14h2V6.99h3L9 3zM14 10v7.01h-3L15 21l4-3.99h-3V10z"/>');
    }
};
IconImportExport_TwoTone.styles = style;
IconImportExport_TwoTone = __decorate([
    customElement('mdui-icon-import-export--two-tone')
], IconImportExport_TwoTone);
export { IconImportExport_TwoTone };
