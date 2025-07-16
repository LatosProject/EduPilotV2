import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropDown_TwoTone = class IconArrowDropDown_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m7 10 5 5 5-5H7z"/>');
    }
};
IconArrowDropDown_TwoTone.styles = style;
IconArrowDropDown_TwoTone = __decorate([
    customElement('mdui-icon-arrow-drop-down--two-tone')
], IconArrowDropDown_TwoTone);
export { IconArrowDropDown_TwoTone };
