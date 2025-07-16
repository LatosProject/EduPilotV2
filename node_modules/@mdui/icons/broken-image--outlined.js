import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrokenImage_Outlined = class IconBrokenImage_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-4.58l.99.99 4-4 4 4 4-3.99L19 12.43V19zm0-9.41-1.01-1.01-4 4.01-4-4-4 4-.99-1V5h14v4.59z"/>');
    }
};
IconBrokenImage_Outlined.styles = style;
IconBrokenImage_Outlined = __decorate([
    customElement('mdui-icon-broken-image--outlined')
], IconBrokenImage_Outlined);
export { IconBrokenImage_Outlined };
