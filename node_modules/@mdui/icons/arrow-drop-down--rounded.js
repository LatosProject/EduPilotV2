import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropDown_Rounded = class IconArrowDropDown_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m8.71 11.71 2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"/>');
    }
};
IconArrowDropDown_Rounded.styles = style;
IconArrowDropDown_Rounded = __decorate([
    customElement('mdui-icon-arrow-drop-down--rounded')
], IconArrowDropDown_Rounded);
export { IconArrowDropDown_Rounded };
