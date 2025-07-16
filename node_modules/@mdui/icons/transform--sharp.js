import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTransform_Sharp = class IconTransform_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v10h10v2h-2l3 3 3-3h-2v-2h4zM10 8h6v6h2V6h-8v2z"/>');
    }
};
IconTransform_Sharp.styles = style;
IconTransform_Sharp = __decorate([
    customElement('mdui-icon-transform--sharp')
], IconTransform_Sharp);
export { IconTransform_Sharp };
