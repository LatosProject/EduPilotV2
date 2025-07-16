import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDropDown = class IconArrowDropDown extends LitElement {
    render() {
        return svgTag('<path d="m7 10 5 5 5-5z"/>');
    }
};
IconArrowDropDown.styles = style;
IconArrowDropDown = __decorate([
    customElement('mdui-icon-arrow-drop-down')
], IconArrowDropDown);
export { IconArrowDropDown };
