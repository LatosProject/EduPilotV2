import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCategory_Outlined = class IconCategory_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>');
    }
};
IconCategory_Outlined.styles = style;
IconCategory_Outlined = __decorate([
    customElement('mdui-icon-category--outlined')
], IconCategory_Outlined);
export { IconCategory_Outlined };
