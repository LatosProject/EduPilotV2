import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWidgets_TwoTone = class IconWidgets_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5h4v4H5zm10 10h4v4h-4zM5 15h4v4H5zM16.66 4.52l-2.83 2.82 2.83 2.83 2.83-2.83z" opacity=".3"/><path d="M16.66 1.69 11 7.34 16.66 13l5.66-5.66-5.66-5.65zm-2.83 5.65 2.83-2.83 2.83 2.83-2.83 2.83-2.83-2.83zM3 3v8h8V3H3zm6 6H5V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-2v8h8v-8h-8zm6 6h-4v-4h4v4z"/>');
    }
};
IconWidgets_TwoTone.styles = style;
IconWidgets_TwoTone = __decorate([
    customElement('mdui-icon-widgets--two-tone')
], IconWidgets_TwoTone);
export { IconWidgets_TwoTone };
