import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalShadesClosed_Rounded = class IconVerticalShadesClosed_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM13 5h1.5v14H13V5zm-2 14H9.5V5H11v14zM6 5h1.5v14H6V5zm10.5 14V5H18v14h-1.5z"/>');
    }
};
IconVerticalShadesClosed_Rounded.styles = style;
IconVerticalShadesClosed_Rounded = __decorate([
    customElement('mdui-icon-vertical-shades-closed--rounded')
], IconVerticalShadesClosed_Rounded);
export { IconVerticalShadesClosed_Rounded };
