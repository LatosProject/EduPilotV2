import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatColorText_TwoTone = class IconFormatColorText_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M2 20h20v4H2v-4zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5L5.49 17zm4.42-5.61 2.03-5.79h.12l2.03 5.79H9.91z"/>');
    }
};
IconFormatColorText_TwoTone.styles = style;
IconFormatColorText_TwoTone = __decorate([
    customElement('mdui-icon-format-color-text--two-tone')
], IconFormatColorText_TwoTone);
export { IconFormatColorText_TwoTone };
