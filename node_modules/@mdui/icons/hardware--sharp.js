import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHardware_Sharp = class IconHardware_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v3h6V8l3 3h2V3h-2zM9 13v8h6v-8H9z"/>');
    }
};
IconHardware_Sharp.styles = style;
IconHardware_Sharp = __decorate([
    customElement('mdui-icon-hardware--sharp')
], IconHardware_Sharp);
export { IconHardware_Sharp };
