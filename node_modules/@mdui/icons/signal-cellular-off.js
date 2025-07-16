import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalCellularOff = class IconSignalCellularOff extends LitElement {
    render() {
        return svgTag('<path d="m21 1-8.59 8.59L21 18.18V1zM4.77 4.5 3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z"/>');
    }
};
IconSignalCellularOff.styles = style;
IconSignalCellularOff = __decorate([
    customElement('mdui-icon-signal-cellular-off')
], IconSignalCellularOff);
export { IconSignalCellularOff };
