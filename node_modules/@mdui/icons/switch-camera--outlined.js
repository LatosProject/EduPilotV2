import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwitchCamera_Outlined = class IconSwitchCamera_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.88 4h4.24l1.83 2H20v12H4V6h4.05"/><path d="M15 11H9V8.5L5.5 12 9 15.5V13h6v2.5l3.5-3.5L15 8.5z"/>');
    }
};
IconSwitchCamera_Outlined.styles = style;
IconSwitchCamera_Outlined = __decorate([
    customElement('mdui-icon-switch-camera--outlined')
], IconSwitchCamera_Outlined);
export { IconSwitchCamera_Outlined };
