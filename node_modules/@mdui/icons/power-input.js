import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPowerInput = class IconPowerInput extends LitElement {
    render() {
        return svgTag('<path d="M2 9v2h19V9H2zm0 6h5v-2H2v2zm7 0h5v-2H9v2zm7 0h5v-2h-5v2z"/>');
    }
};
IconPowerInput.styles = style;
IconPowerInput = __decorate([
    customElement('mdui-icon-power-input')
], IconPowerInput);
export { IconPowerInput };
