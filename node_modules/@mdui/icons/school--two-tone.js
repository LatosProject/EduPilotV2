import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSchool_TwoTone = class IconSchool_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 12.27v3.72l5 2.73 5-2.73v-3.72L12 15zM5.18 9 12 12.72 18.82 9 12 5.28z" opacity=".3"/><path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm5 12.99-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72zm-5-3.27L5.18 9 12 5.28 18.82 9 12 12.72z"/>');
    }
};
IconSchool_TwoTone.styles = style;
IconSchool_TwoTone = __decorate([
    customElement('mdui-icon-school--two-tone')
], IconSchool_TwoTone);
export { IconSchool_TwoTone };
