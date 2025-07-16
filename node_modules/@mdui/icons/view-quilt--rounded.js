import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewQuilt_Rounded = class IconViewQuilt_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M21 6v4.5c0 .55-.45 1-1 1h-9.67c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1H20c.55 0 1 .45 1 1zm-6.33 12v-4.5c0-.55-.45-1-1-1h-3.33c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h3.33c.55 0 1-.45 1-1zm1-4.5V18c0 .55.45 1 1 1H20c.55 0 1-.45 1-1v-4.5c0-.55-.45-1-1-1h-3.33c-.56 0-1 .45-1 1zM8.33 18V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.33c.56 0 1-.45 1-1z"/>');
    }
};
IconViewQuilt_Rounded.styles = style;
IconViewQuilt_Rounded = __decorate([
    customElement('mdui-icon-view-quilt--rounded')
], IconViewQuilt_Rounded);
export { IconViewQuilt_Rounded };
