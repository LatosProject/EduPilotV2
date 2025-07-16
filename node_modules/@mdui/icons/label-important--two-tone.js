import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLabelImportant_TwoTone = class IconLabelImportant_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 7H7.89l3.57 5-3.57 5H15l3.55-5z" opacity=".3"/><path d="M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16zM15 17H7.89l3.57-5-3.57-5H15l3.55 5L15 17z"/>');
    }
};
IconLabelImportant_TwoTone.styles = style;
IconLabelImportant_TwoTone = __decorate([
    customElement('mdui-icon-label-important--two-tone')
], IconLabelImportant_TwoTone);
export { IconLabelImportant_TwoTone };
