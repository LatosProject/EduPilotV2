import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRampRight_Rounded = class IconRampRight_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 21c.55 0 1-.45 1-1V6.83l.88.88a.996.996 0 1 0 1.41-1.41L12.7 3.71a.996.996 0 0 0-1.41 0L8.71 6.29a.996.996 0 1 0 1.41 1.41l.88-.87V9c0 3.62-2.89 6.22-4.97 7.62a.99.99 0 0 0-.14 1.53c.33.33.87.4 1.26.13C8.74 17.22 10.04 16 11 14.69v5.3c0 .56.45 1.01 1 1.01z"/>');
    }
};
IconRampRight_Rounded.styles = style;
IconRampRight_Rounded = __decorate([
    customElement('mdui-icon-ramp-right--rounded')
], IconRampRight_Rounded);
export { IconRampRight_Rounded };
