import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSyncAlt_Outlined = class IconSyncAlt_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7.41 13.41 6 12l-4 4 4 4 1.41-1.41L5.83 17H21v-2H5.83zm9.18-2.82L18 12l4-4-4-4-1.41 1.41L18.17 7H3v2h15.17z"/>');
    }
};
IconSyncAlt_Outlined.styles = style;
IconSyncAlt_Outlined = __decorate([
    customElement('mdui-icon-sync-alt--outlined')
], IconSyncAlt_Outlined);
export { IconSyncAlt_Outlined };
