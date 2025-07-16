import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSettingsCell_Outlined = class IconSettingsCell_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10zm0-12H8V2h8v1z"/>');
    }
};
IconSettingsCell_Outlined.styles = style;
IconSettingsCell_Outlined = __decorate([
    customElement('mdui-icon-settings-cell--outlined')
], IconSettingsCell_Outlined);
export { IconSettingsCell_Outlined };
