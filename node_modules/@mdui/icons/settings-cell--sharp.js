import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSettingsCell_Sharp = class IconSettingsCell_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM6 0v20h12V0H6zm10 16H8V4h8v12z"/>');
    }
};
IconSettingsCell_Sharp.styles = style;
IconSettingsCell_Sharp = __decorate([
    customElement('mdui-icon-settings-cell--sharp')
], IconSettingsCell_Sharp);
export { IconSettingsCell_Sharp };
