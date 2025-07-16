import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropDown_Outlined = class IconArrowDropDown_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m7 10 5 5 5-5H7z"/>');
    }
};
IconArrowDropDown_Outlined.styles = style;
IconArrowDropDown_Outlined = __decorate([
    customElement('mdui-icon-arrow-drop-down--outlined')
], IconArrowDropDown_Outlined);
export { IconArrowDropDown_Outlined };
