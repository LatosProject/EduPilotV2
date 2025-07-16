import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowBackIos_TwoTone = class IconArrowBackIos_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>');
    }
};
IconArrowBackIos_TwoTone.styles = style;
IconArrowBackIos_TwoTone = __decorate([
    customElement('mdui-icon-arrow-back-ios--two-tone')
], IconArrowBackIos_TwoTone);
export { IconArrowBackIos_TwoTone };
