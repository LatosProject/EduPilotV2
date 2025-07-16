import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowLeft_TwoTone = class IconArrowLeft_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m14 7-5 5 5 5V7z"/>');
    }
};
IconArrowLeft_TwoTone.styles = style;
IconArrowLeft_TwoTone = __decorate([
    customElement('mdui-icon-arrow-left--two-tone')
], IconArrowLeft_TwoTone);
export { IconArrowLeft_TwoTone };
