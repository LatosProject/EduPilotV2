import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTabletAndroid = class IconTabletAndroid extends LitElement {
    render() {
        return svgTag('<path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"/>');
    }
};
IconTabletAndroid.styles = style;
IconTabletAndroid = __decorate([
    customElement('mdui-icon-tablet-android')
], IconTabletAndroid);
export { IconTabletAndroid };
