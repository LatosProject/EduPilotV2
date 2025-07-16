import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStayPrimaryLandscape_Rounded = class IconStayPrimaryLandscape_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M1.01 7 1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/>');
    }
};
IconStayPrimaryLandscape_Rounded.styles = style;
IconStayPrimaryLandscape_Rounded = __decorate([
    customElement('mdui-icon-stay-primary-landscape--rounded')
], IconStayPrimaryLandscape_Rounded);
export { IconStayPrimaryLandscape_Rounded };
