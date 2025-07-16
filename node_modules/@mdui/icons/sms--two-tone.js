import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSms_TwoTone = class IconSms_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 17.17 5.17 16H20V4H4v13.17zM15 9h2v2h-2V9zm-4 0h2v2h-2V9zM7 9h2v2H7V9z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"/>');
    }
};
IconSms_TwoTone.styles = style;
IconSms_TwoTone = __decorate([
    customElement('mdui-icon-sms--two-tone')
], IconSms_TwoTone);
export { IconSms_TwoTone };
