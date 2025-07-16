import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStayPrimaryLandscape_TwoTone = class IconStayPrimaryLandscape_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 7h14v10H5z" opacity=".3"/><path d="M21 5H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-2 12H5V7h14v10z"/>');
    }
};
IconStayPrimaryLandscape_TwoTone.styles = style;
IconStayPrimaryLandscape_TwoTone = __decorate([
    customElement('mdui-icon-stay-primary-landscape--two-tone')
], IconStayPrimaryLandscape_TwoTone);
export { IconStayPrimaryLandscape_TwoTone };
