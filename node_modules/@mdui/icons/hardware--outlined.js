import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHardware_Outlined = class IconHardware_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3h-2zm-5 16h-2v-6h2v6zm-2-8V6H6.77C7.32 5.39 8.11 5 9 5h4v6h-2z"/>');
    }
};
IconHardware_Outlined.styles = style;
IconHardware_Outlined = __decorate([
    customElement('mdui-icon-hardware--outlined')
], IconHardware_Outlined);
export { IconHardware_Outlined };
