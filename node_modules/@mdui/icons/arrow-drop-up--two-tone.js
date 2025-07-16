import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropUp_TwoTone = class IconArrowDropUp_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m7 14 5-5 5 5H7z"/>');
    }
};
IconArrowDropUp_TwoTone.styles = style;
IconArrowDropUp_TwoTone = __decorate([
    customElement('mdui-icon-arrow-drop-up--two-tone')
], IconArrowDropUp_TwoTone);
export { IconArrowDropUp_TwoTone };
