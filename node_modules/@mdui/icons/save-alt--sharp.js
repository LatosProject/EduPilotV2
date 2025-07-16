import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSaveAlt_Sharp = class IconSaveAlt_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 12v7H5v-7H3v9h18v-9h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>');
    }
};
IconSaveAlt_Sharp.styles = style;
IconSaveAlt_Sharp = __decorate([
    customElement('mdui-icon-save-alt--sharp')
], IconSaveAlt_Sharp);
export { IconSaveAlt_Sharp };
