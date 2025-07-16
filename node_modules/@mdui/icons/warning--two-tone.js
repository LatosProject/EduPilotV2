import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWarning_TwoTone = class IconWarning_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4.47 19h15.06L12 5.99 4.47 19zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" opacity=".3"/><path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"/>');
    }
};
IconWarning_TwoTone.styles = style;
IconWarning_TwoTone = __decorate([
    customElement('mdui-icon-warning--two-tone')
], IconWarning_TwoTone);
export { IconWarning_TwoTone };
