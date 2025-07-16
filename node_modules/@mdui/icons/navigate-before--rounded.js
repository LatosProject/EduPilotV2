import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNavigateBefore_Rounded = class IconNavigateBefore_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M14.91 6.71a.996.996 0 0 0-1.41 0L8.91 11.3a.996.996 0 0 0 0 1.41l4.59 4.59a.996.996 0 1 0 1.41-1.41L11.03 12l3.88-3.88c.38-.39.38-1.03 0-1.41z"/>');
    }
};
IconNavigateBefore_Rounded.styles = style;
IconNavigateBefore_Rounded = __decorate([
    customElement('mdui-icon-navigate-before--rounded')
], IconNavigateBefore_Rounded);
export { IconNavigateBefore_Rounded };
