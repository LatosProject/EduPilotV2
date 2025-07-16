import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHeadset_Sharp = class IconHeadset_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V20h6v-8H5v-1.71C5 6.45 7.96 3.11 11.79 3A6.999 6.999 0 0 1 19 10v2h-4v8h6V10c0-5.17-4.36-9.32-9.6-8.98z"/>');
    }
};
IconHeadset_Sharp.styles = style;
IconHeadset_Sharp = __decorate([
    customElement('mdui-icon-headset--sharp')
], IconHeadset_Sharp);
export { IconHeadset_Sharp };
