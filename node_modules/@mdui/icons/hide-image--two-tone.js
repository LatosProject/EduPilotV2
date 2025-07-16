import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHideImage_TwoTone = class IconHideImage_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m16.17 19-2-2H6l3-4 2.25 3 .82-1.1L5 7.83V19zM7.83 5 19 16.17V5z" opacity=".3"/><path d="M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z"/>');
    }
};
IconHideImage_TwoTone.styles = style;
IconHideImage_TwoTone = __decorate([
    customElement('mdui-icon-hide-image--two-tone')
], IconHideImage_TwoTone);
export { IconHideImage_TwoTone };
