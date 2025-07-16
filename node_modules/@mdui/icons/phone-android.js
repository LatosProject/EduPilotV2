import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhoneAndroid = class IconPhoneAndroid extends LitElement {
    render() {
        return svgTag('<path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>');
    }
};
IconPhoneAndroid.styles = style;
IconPhoneAndroid = __decorate([
    customElement('mdui-icon-phone-android')
], IconPhoneAndroid);
export { IconPhoneAndroid };
