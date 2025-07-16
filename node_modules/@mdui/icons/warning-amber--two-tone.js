import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWarningAmber_TwoTone = class IconWarningAmber_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M1 21h22L12 2 1 21zm3.47-2L12 5.99 19.53 19H4.47zM11 16h2v2h-2zm0-6h2v4h-2z"/>');
    }
};
IconWarningAmber_TwoTone.styles = style;
IconWarningAmber_TwoTone = __decorate([
    customElement('mdui-icon-warning-amber--two-tone')
], IconWarningAmber_TwoTone);
export { IconWarningAmber_TwoTone };
