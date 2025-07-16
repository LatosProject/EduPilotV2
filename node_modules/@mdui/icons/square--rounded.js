import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSquare_Rounded = class IconSquare_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"/>');
    }
};
IconSquare_Rounded.styles = style;
IconSquare_Rounded = __decorate([
    customElement('mdui-icon-square--rounded')
], IconSquare_Rounded);
export { IconSquare_Rounded };
