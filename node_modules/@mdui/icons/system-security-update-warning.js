import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSystemSecurityUpdateWarning = class IconSystemSecurityUpdateWarning extends LitElement {
    render() {
        return svgTag('<path d="M11 15h2v2h-2zm0-8h2v6h-2z"/><path d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z"/>');
    }
};
IconSystemSecurityUpdateWarning.styles = style;
IconSystemSecurityUpdateWarning = __decorate([
    customElement('mdui-icon-system-security-update-warning')
], IconSystemSecurityUpdateWarning);
export { IconSystemSecurityUpdateWarning };
