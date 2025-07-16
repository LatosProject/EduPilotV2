import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowForward_Outlined = class IconArrowForward_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>');
    }
};
IconArrowForward_Outlined.styles = style;
IconArrowForward_Outlined = __decorate([
    customElement('mdui-icon-arrow-forward--outlined')
], IconArrowForward_Outlined);
export { IconArrowForward_Outlined };
