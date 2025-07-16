import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthNormal_Rounded = class IconWidthNormal_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h4v12H4V6zm16 12h-4V6h4v12z"/>');
    }
};
IconWidthNormal_Rounded.styles = style;
IconWidthNormal_Rounded = __decorate([
    customElement('mdui-icon-width-normal--rounded')
], IconWidthNormal_Rounded);
export { IconWidthNormal_Rounded };
