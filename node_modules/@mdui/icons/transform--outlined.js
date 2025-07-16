import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTransform_Outlined = class IconTransform_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"/>');
    }
};
IconTransform_Outlined.styles = style;
IconTransform_Outlined = __decorate([
    customElement('mdui-icon-transform--outlined')
], IconTransform_Outlined);
export { IconTransform_Outlined };
