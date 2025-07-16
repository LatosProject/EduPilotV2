import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSyncAlt = class IconSyncAlt extends LitElement {
    render() {
        return svgTag('<path d="m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z"/>');
    }
};
IconSyncAlt.styles = style;
IconSyncAlt = __decorate([
    customElement('mdui-icon-sync-alt')
], IconSyncAlt);
export { IconSyncAlt };
