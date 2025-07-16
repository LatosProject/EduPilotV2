import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSaveAlt_Outlined = class IconSaveAlt_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67 2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>');
    }
};
IconSaveAlt_Outlined.styles = style;
IconSaveAlt_Outlined = __decorate([
    customElement('mdui-icon-save-alt--outlined')
], IconSaveAlt_Outlined);
export { IconSaveAlt_Outlined };
