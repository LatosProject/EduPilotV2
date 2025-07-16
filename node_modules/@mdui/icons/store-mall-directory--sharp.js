import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStoreMallDirectory_Sharp = class IconStoreMallDirectory_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/>');
    }
};
IconStoreMallDirectory_Sharp.styles = style;
IconStoreMallDirectory_Sharp = __decorate([
    customElement('mdui-icon-store-mall-directory--sharp')
], IconStoreMallDirectory_Sharp);
export { IconStoreMallDirectory_Sharp };
