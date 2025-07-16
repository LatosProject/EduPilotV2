import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTabletAndroid_Sharp = class IconTabletAndroid_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 0H3v24h18V0zm-7 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"/>');
    }
};
IconTabletAndroid_Sharp.styles = style;
IconTabletAndroid_Sharp = __decorate([
    customElement('mdui-icon-tablet-android--sharp')
], IconTabletAndroid_Sharp);
export { IconTabletAndroid_Sharp };
