import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddBusiness_Outlined = class IconAddBusiness_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M2 4h15v2H2zm13 13h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zm-5.96-6 .6-3h11.72l.6 3H3.04z"/><path d="M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/>');
    }
};
IconAddBusiness_Outlined.styles = style;
IconAddBusiness_Outlined = __decorate([
    customElement('mdui-icon-add-business--outlined')
], IconAddBusiness_Outlined);
export { IconAddBusiness_Outlined };
