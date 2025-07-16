import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTransform_TwoTone = class IconTransform_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4v-2H8V4zm10 10V8c0-1.1-.9-2-2-2h-6v2h6v6h2z"/>');
    }
};
IconTransform_TwoTone.styles = style;
IconTransform_TwoTone = __decorate([
    customElement('mdui-icon-transform--two-tone')
], IconTransform_TwoTone);
export { IconTransform_TwoTone };
