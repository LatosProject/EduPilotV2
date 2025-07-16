import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFitScreen_TwoTone = class IconFitScreen_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 10h8v4H8z" opacity=".3"/><path d="M6 16h12V8H6v8zm2-6h8v4H8v-4zm-4 5H2v3c0 1.1.9 2 2 2h3v-2H4v-3zm0-9h3V4H4c-1.1 0-2 .9-2 2v3h2V6zm16-2h-3v2h3v3h2V6c0-1.1-.9-2-2-2zm0 14h-3v2h3c1.1 0 2-.9 2-2v-3h-2v3z"/>');
    }
};
IconFitScreen_TwoTone.styles = style;
IconFitScreen_TwoTone = __decorate([
    customElement('mdui-icon-fit-screen--two-tone')
], IconFitScreen_TwoTone);
export { IconFitScreen_TwoTone };
