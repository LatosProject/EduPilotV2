import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBurstMode_TwoTone = class IconBurstMode_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 17h10V7H11v10zm3-3.53 1.43 1.72 2-2.58L20 15.99h-8l2-2.52z" opacity=".3"/><path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H11V7h10v10zm-3.57-4.38-2 2.57L14 13.47l-2 2.52h8z"/>');
    }
};
IconBurstMode_TwoTone.styles = style;
IconBurstMode_TwoTone = __decorate([
    customElement('mdui-icon-burst-mode--two-tone')
], IconBurstMode_TwoTone);
export { IconBurstMode_TwoTone };
