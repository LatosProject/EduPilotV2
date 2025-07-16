import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLogout_Sharp = class IconLogout_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 5h7V3H3v18h9v-2H5z"/><path d="m21 12-4-4v3H9v2h8v3z"/>');
    }
};
IconLogout_Sharp.styles = style;
IconLogout_Sharp = __decorate([
    customElement('mdui-icon-logout--sharp')
], IconLogout_Sharp);
export { IconLogout_Sharp };
