import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGrading_TwoTone = class IconGrading_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 7h16v2H4V7zm0 6h16v-2H4v2zm0 4h7v-2H4v2zm0 4h7v-2H4v2zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21 20 16.42 18.58 15l-3.17 3.17zM4 3v2h16V3H4z"/>');
    }
};
IconGrading_TwoTone.styles = style;
IconGrading_TwoTone = __decorate([
    customElement('mdui-icon-grading--two-tone')
], IconGrading_TwoTone);
export { IconGrading_TwoTone };
