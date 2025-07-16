import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLiving_Sharp = class IconLiving_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15.5 12v2.5h-7V12h-2v4.5h11V12z"/><path d="M10 10v3h4v-3l2.25-.01V7.5h-8.5v2.49z"/><path d="M22 2H2v20h20V2zm-3 7.99V18H5v-8l1.25-.01V6h11.5v3.99H19z"/>');
    }
};
IconLiving_Sharp.styles = style;
IconLiving_Sharp = __decorate([
    customElement('mdui-icon-living--sharp')
], IconLiving_Sharp);
export { IconLiving_Sharp };
