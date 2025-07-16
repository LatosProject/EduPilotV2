import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon1xMobiledata_Rounded = class Icon1xMobiledata_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M5 7h2c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1s-1-.45-1-1V9H5c-.55 0-1-.45-1-1s.45-1 1-1zm10.83 4.72 1.92-3.21A.997.997 0 0 0 16.9 7a.99.99 0 0 0-.86.49l-1.37 2.28-1.38-2.29c-.18-.3-.5-.48-.85-.48-.78 0-1.26.85-.86 1.51l1.92 3.21-2.26 3.77c-.4.67.08 1.51.86 1.51.35 0 .68-.18.86-.49l1.71-2.85 1.71 2.85c.18.3.51.49.86.49h.01c.78 0 1.26-.85.86-1.51l-2.28-3.77z"/>');
    }
};
Icon1xMobiledata_Rounded.styles = style;
Icon1xMobiledata_Rounded = __decorate([
    customElement('mdui-icon-1x-mobiledata--rounded')
], Icon1xMobiledata_Rounded);
export { Icon1xMobiledata_Rounded };
