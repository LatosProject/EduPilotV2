import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNorthEast_TwoTone = class IconNorthEast_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"/>');
    }
};
IconNorthEast_TwoTone.styles = style;
IconNorthEast_TwoTone = __decorate([
    customElement('mdui-icon-north-east--two-tone')
], IconNorthEast_TwoTone);
export { IconNorthEast_TwoTone };
