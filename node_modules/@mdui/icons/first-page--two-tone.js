import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFirstPage_TwoTone = class IconFirstPage_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z"/>');
    }
};
IconFirstPage_TwoTone.styles = style;
IconFirstPage_TwoTone = __decorate([
    customElement('mdui-icon-first-page--two-tone')
], IconFirstPage_TwoTone);
export { IconFirstPage_TwoTone };
