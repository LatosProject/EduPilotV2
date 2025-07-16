import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWoman_Rounded = class IconWoman_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="4" r="2"/><path d="m16.45 14.63-2.52-6.32c-.32-.79-1.08-1.3-1.94-1.31-.85 0-1.62.51-1.94 1.31l-2.52 6.32c-.25.66.24 1.37.94 1.37H10v5c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5h1.53c.7 0 1.19-.71.92-1.37z"/>');
    }
};
IconWoman_Rounded.styles = style;
IconWoman_Rounded = __decorate([
    customElement('mdui-icon-woman--rounded')
], IconWoman_Rounded);
export { IconWoman_Rounded };
