import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRememberMe = class IconRememberMe extends LitElement {
    render() {
        return svgTag('<path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10v9.21z"/><circle cx="12" cy="10" r="3"/>');
    }
};
IconRememberMe.styles = style;
IconRememberMe = __decorate([
    customElement('mdui-icon-remember-me')
], IconRememberMe);
export { IconRememberMe };
