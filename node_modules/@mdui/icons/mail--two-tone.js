import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMail_TwoTone = class IconMail_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 6H4l8 4.99zM4 8v10h16V8l-8 5z" opacity=".3"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 4.99L4 6h16zm0 12H4V8l8 5 8-5v10z"/>');
    }
};
IconMail_TwoTone.styles = style;
IconMail_TwoTone = __decorate([
    customElement('mdui-icon-mail--two-tone')
], IconMail_TwoTone);
export { IconMail_TwoTone };
