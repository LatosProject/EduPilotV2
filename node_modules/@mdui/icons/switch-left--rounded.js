import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwitchLeft_Rounded = class IconSwitchLeft_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M8.5 8.62v6.76L5.12 12 8.5 8.62m-4.79 2.67a.996.996 0 0 0 0 1.41l4.59 4.59c.62.63 1.7.19 1.7-.7V7.41c0-.89-1.08-1.34-1.71-.71l-4.58 4.59zM14 7.41v9.17c0 .89 1.08 1.34 1.71.71l4.59-4.59a.996.996 0 0 0 0-1.41L15.71 6.7c-.63-.62-1.71-.18-1.71.71z"/>');
    }
};
IconSwitchLeft_Rounded.styles = style;
IconSwitchLeft_Rounded = __decorate([
    customElement('mdui-icon-switch-left--rounded')
], IconSwitchLeft_Rounded);
export { IconSwitchLeft_Rounded };
