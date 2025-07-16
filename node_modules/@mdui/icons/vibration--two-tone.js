import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVibration_TwoTone = class IconVibration_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 5h8v14H8z" opacity=".3"/><path d="M19 7h2v10h-2zm3 2h2v6h-2zM0 9h2v6H0zm16.5-6h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14zM3 7h2v10H3z"/>');
    }
};
IconVibration_TwoTone.styles = style;
IconVibration_TwoTone = __decorate([
    customElement('mdui-icon-vibration--two-tone')
], IconVibration_TwoTone);
export { IconVibration_TwoTone };
