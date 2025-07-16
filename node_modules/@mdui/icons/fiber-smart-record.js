import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFiberSmartRecord = class IconFiberSmartRecord extends LitElement {
    render() {
        return svgTag('<circle cx="9" cy="12" r="8"/><path d="M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z"/>');
    }
};
IconFiberSmartRecord.styles = style;
IconFiberSmartRecord = __decorate([
    customElement('mdui-icon-fiber-smart-record')
], IconFiberSmartRecord);
export { IconFiberSmartRecord };
