import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRampRight = class IconRampRight extends LitElement {
    render() {
        return svgTag('<path d="M11 21h2V6.83l1.59 1.59L16 7l-4-4-4 4 1.41 1.41L11 6.83V9c0 4.27-4.03 7.13-6 8.27l1.46 1.46C8.37 17.56 9.9 16.19 11 14.7V21z"/>');
    }
};
IconRampRight.styles = style;
IconRampRight = __decorate([
    customElement('mdui-icon-ramp-right')
], IconRampRight);
export { IconRampRight };
