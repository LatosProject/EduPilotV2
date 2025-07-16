import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNavigateBefore_Outlined = class IconNavigateBefore_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/>');
    }
};
IconNavigateBefore_Outlined.styles = style;
IconNavigateBefore_Outlined = __decorate([
    customElement('mdui-icon-navigate-before--outlined')
], IconNavigateBefore_Outlined);
export { IconNavigateBefore_Outlined };
