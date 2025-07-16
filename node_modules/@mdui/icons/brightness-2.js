import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrightness_2 = class IconBrightness_2 extends LitElement {
    render() {
        return svgTag('<path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/>');
    }
};
IconBrightness_2.styles = style;
IconBrightness_2 = __decorate([
    customElement('mdui-icon-brightness-2')
], IconBrightness_2);
export { IconBrightness_2 };
