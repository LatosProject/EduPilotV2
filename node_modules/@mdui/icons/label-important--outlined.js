import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLabelImportant_Outlined = class IconLabelImportant_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 18.99h11c.67 0 1.27-.32 1.63-.83L21 12l-4.37-6.16C16.27 5.33 15.67 5 15 5H4l5 7-5 6.99z"/>');
    }
};
IconLabelImportant_Outlined.styles = style;
IconLabelImportant_Outlined = __decorate([
    customElement('mdui-icon-label-important--outlined')
], IconLabelImportant_Outlined);
export { IconLabelImportant_Outlined };
