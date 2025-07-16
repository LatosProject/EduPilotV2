import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSecurityUpdateWarning_Rounded = class IconSecurityUpdateWarning_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="16" r="1"/><path d="M12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z"/><path d="M17 1H7c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 17H7V6h10v12z"/>');
    }
};
IconSecurityUpdateWarning_Rounded.styles = style;
IconSecurityUpdateWarning_Rounded = __decorate([
    customElement('mdui-icon-security-update-warning--rounded')
], IconSecurityUpdateWarning_Rounded);
export { IconSecurityUpdateWarning_Rounded };
