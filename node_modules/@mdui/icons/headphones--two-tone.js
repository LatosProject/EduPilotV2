import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHeadphones_TwoTone = class IconHeadphones_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 15h2v4H5zm12 0h2v4h-2z" opacity=".3"/><path d="M12 3a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7a9 9 0 0 0-9-9zM7 15v4H5v-4h2zm12 4h-2v-4h2v4z"/>');
    }
};
IconHeadphones_TwoTone.styles = style;
IconHeadphones_TwoTone = __decorate([
    customElement('mdui-icon-headphones--two-tone')
], IconHeadphones_TwoTone);
export { IconHeadphones_TwoTone };
