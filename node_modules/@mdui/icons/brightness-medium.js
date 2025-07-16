import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrightnessMedium = class IconBrightnessMedium extends LitElement {
    render() {
        return svgTag('<path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/>');
    }
};
IconBrightnessMedium.styles = style;
IconBrightnessMedium = __decorate([
    customElement('mdui-icon-brightness-medium')
], IconBrightnessMedium);
export { IconBrightnessMedium };
