import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhoneAndroid_Sharp = class IconPhoneAndroid_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 1H5v22h14V1zm-5 20h-4v-1h4v1zm3-3H7V4h10v14z"/>');
    }
};
IconPhoneAndroid_Sharp.styles = style;
IconPhoneAndroid_Sharp = __decorate([
    customElement('mdui-icon-phone-android--sharp')
], IconPhoneAndroid_Sharp);
export { IconPhoneAndroid_Sharp };
