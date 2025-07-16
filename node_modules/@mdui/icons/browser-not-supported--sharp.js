import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrowserNotSupported_Sharp = class IconBrowserNotSupported_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 6v10.5l2 2V4H6.5l2 2zM3.22 3.32 1.95 4.59 3 5.64V20h14.36l2.06 2.06 1.27-1.27L3.22 3.32zM15 18H5V7.64L15.36 18H15z"/>');
    }
};
IconBrowserNotSupported_Sharp.styles = style;
IconBrowserNotSupported_Sharp = __decorate([
    customElement('mdui-icon-browser-not-supported--sharp')
], IconBrowserNotSupported_Sharp);
export { IconBrowserNotSupported_Sharp };
