import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFunctions_TwoTone = class IconFunctions_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z"/>');
    }
};
IconFunctions_TwoTone.styles = style;
IconFunctions_TwoTone = __decorate([
    customElement('mdui-icon-functions--two-tone')
], IconFunctions_TwoTone);
export { IconFunctions_TwoTone };
