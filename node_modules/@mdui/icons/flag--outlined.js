import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFlag_Outlined = class IconFlag_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12.36 6 .4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z"/>');
    }
};
IconFlag_Outlined.styles = style;
IconFlag_Outlined = __decorate([
    customElement('mdui-icon-flag--outlined')
], IconFlag_Outlined);
export { IconFlag_Outlined };
