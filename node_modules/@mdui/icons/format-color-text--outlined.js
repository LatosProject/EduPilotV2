import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatColorText_Outlined = class IconFormatColorText_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 20h20v4H2v-4zm3.49-3h2.42l1.27-3.58h5.65L16.09 17h2.42L13.25 3h-2.5L5.49 17zm4.42-5.61 2.03-5.79h.12l2.03 5.79H9.91z"/>');
    }
};
IconFormatColorText_Outlined.styles = style;
IconFormatColorText_Outlined = __decorate([
    customElement('mdui-icon-format-color-text--outlined')
], IconFormatColorText_Outlined);
export { IconFormatColorText_Outlined };
