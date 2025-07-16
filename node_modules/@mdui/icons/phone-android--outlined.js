import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhoneAndroid_Outlined = class IconPhoneAndroid_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"/>');
    }
};
IconPhoneAndroid_Outlined.styles = style;
IconPhoneAndroid_Outlined = __decorate([
    customElement('mdui-icon-phone-android--outlined')
], IconPhoneAndroid_Outlined);
export { IconPhoneAndroid_Outlined };
