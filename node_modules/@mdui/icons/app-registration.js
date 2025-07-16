import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAppRegistration = class IconAppRegistration extends LitElement {
    render() {
        return svgTag('<path d="M10 4h4v4h-4zM4 16h4v4H4zm0-6h4v4H4zm0-6h4v4H4zm10 8.42V10h-4v4h2.42zm6.88-1.13-1.17-1.17a.41.41 0 0 0-.58 0l-.88.88L20 12.75l.88-.88a.41.41 0 0 0 0-.58zM11 18.25V20h1.75l6.67-6.67-1.75-1.75zM16 4h4v4h-4z"/>');
    }
};
IconAppRegistration.styles = style;
IconAppRegistration = __decorate([
    customElement('mdui-icon-app-registration')
], IconAppRegistration);
export { IconAppRegistration };
