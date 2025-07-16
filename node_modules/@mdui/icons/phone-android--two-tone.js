import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhoneAndroid_TwoTone = class IconPhoneAndroid_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 4h10v14H7z" opacity=".3"/><path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3-3H7V4h10v14z"/>');
    }
};
IconPhoneAndroid_TwoTone.styles = style;
IconPhoneAndroid_TwoTone = __decorate([
    customElement('mdui-icon-phone-android--two-tone')
], IconPhoneAndroid_TwoTone);
export { IconPhoneAndroid_TwoTone };
