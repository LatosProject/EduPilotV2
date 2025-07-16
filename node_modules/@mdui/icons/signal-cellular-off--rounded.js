import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalCellularOff_Rounded = class IconSignalCellularOff_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M21 3.41c0-.89-1.08-1.34-1.71-.71l-6.6 6.6L21 17.61V3.41zm.44 17.47L5.62 5.06a.996.996 0 1 0-1.41 1.41l5.66 5.66-7.16 7.16c-.63.63-.19 1.71.7 1.71h15.32l1.29 1.29c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z"/>');
    }
};
IconSignalCellularOff_Rounded.styles = style;
IconSignalCellularOff_Rounded = __decorate([
    customElement('mdui-icon-signal-cellular-off--rounded')
], IconSignalCellularOff_Rounded);
export { IconSignalCellularOff_Rounded };
