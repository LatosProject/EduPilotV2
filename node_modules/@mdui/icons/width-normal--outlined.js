import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthNormal_Outlined = class IconWidthNormal_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h4v12H4zm6 0V6h4v12h-4zm10 0h-4V6h4v12z"/>');
    }
};
IconWidthNormal_Outlined.styles = style;
IconWidthNormal_Outlined = __decorate([
    customElement('mdui-icon-width-normal--outlined')
], IconWidthNormal_Outlined);
export { IconWidthNormal_Outlined };
