import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLaptopWindows_TwoTone = class IconLaptopWindows_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 5h16v10H4z" opacity=".3"/><path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"/>');
    }
};
IconLaptopWindows_TwoTone.styles = style;
IconLaptopWindows_TwoTone = __decorate([
    customElement('mdui-icon-laptop-windows--two-tone')
], IconLaptopWindows_TwoTone);
export { IconLaptopWindows_TwoTone };
