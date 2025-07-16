import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGavel = class IconGavel extends LitElement {
    render() {
        return svgTag('<path d="m5.25 8.069 2.83-2.827 14.134 14.15-2.83 2.827zm4.236-4.242L12.314.998l5.657 5.656-2.828 2.83zM.999 12.315l2.828-2.829 5.657 5.657-2.828 2.828zM1 21h12v2H1z"/>');
    }
};
IconGavel.styles = style;
IconGavel = __decorate([
    customElement('mdui-icon-gavel')
], IconGavel);
export { IconGavel };
