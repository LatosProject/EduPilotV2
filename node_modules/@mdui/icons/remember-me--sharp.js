import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRememberMe_Sharp = class IconRememberMe_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 1H5v22h14V1zm-2 14.21c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10v9.21z"/><circle cx="12" cy="10" r="3"/>');
    }
};
IconRememberMe_Sharp.styles = style;
IconRememberMe_Sharp = __decorate([
    customElement('mdui-icon-remember-me--sharp')
], IconRememberMe_Sharp);
export { IconRememberMe_Sharp };
