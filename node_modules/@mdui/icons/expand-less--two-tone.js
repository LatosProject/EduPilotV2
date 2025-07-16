import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExpandLess_TwoTone = class IconExpandLess_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>');
    }
};
IconExpandLess_TwoTone.styles = style;
IconExpandLess_TwoTone = __decorate([
    customElement('mdui-icon-expand-less--two-tone')
], IconExpandLess_TwoTone);
export { IconExpandLess_TwoTone };
