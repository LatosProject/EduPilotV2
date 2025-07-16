import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrightness_1_Rounded = class IconBrightness_1_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="10"/>');
    }
};
IconBrightness_1_Rounded.styles = style;
IconBrightness_1_Rounded = __decorate([
    customElement('mdui-icon-brightness-1--rounded')
], IconBrightness_1_Rounded);
export { IconBrightness_1_Rounded };
