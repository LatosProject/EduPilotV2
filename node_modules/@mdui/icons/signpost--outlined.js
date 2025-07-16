import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignpost_Outlined = class IconSignpost_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13 10h5l3-3-3-3h-5V2h-2v2H4v6h7v2H6l-3 3 3 3h5v4h2v-4h7v-6h-7v-2zM6 6h11.17l1 1-1 1H6V6zm12 10H6.83l-1-1 1-1H18v2z"/>');
    }
};
IconSignpost_Outlined.styles = style;
IconSignpost_Outlined = __decorate([
    customElement('mdui-icon-signpost--outlined')
], IconSignpost_Outlined);
export { IconSignpost_Outlined };
