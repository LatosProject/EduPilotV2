import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidthWide_Rounded = class IconWidthWide_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h2v12H4V6zm16 12h-2V6h2v12z"/>');
    }
};
IconWidthWide_Rounded.styles = style;
IconWidthWide_Rounded = __decorate([
    customElement('mdui-icon-width-wide--rounded')
], IconWidthWide_Rounded);
export { IconWidthWide_Rounded };
