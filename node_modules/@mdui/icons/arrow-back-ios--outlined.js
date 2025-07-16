import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowBackIos_Outlined = class IconArrowBackIos_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>');
    }
};
IconArrowBackIos_Outlined.styles = style;
IconArrowBackIos_Outlined = __decorate([
    customElement('mdui-icon-arrow-back-ios--outlined')
], IconArrowBackIos_Outlined);
export { IconArrowBackIos_Outlined };
