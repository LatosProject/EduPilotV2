import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHeadset_Outlined = class IconHeadset_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 14v3c0 .55-.45 1-1 1h-1v-4h2M7 14v4H6c-.55 0-1-.45-1-1v-3h2m5-13a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/>');
    }
};
IconHeadset_Outlined.styles = style;
IconHeadset_Outlined = __decorate([
    customElement('mdui-icon-headset--outlined')
], IconHeadset_Outlined);
export { IconHeadset_Outlined };
