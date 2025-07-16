import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGridView_TwoTone = class IconGridView_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5h4v4H5zm0 10h4v4H5zm10 0h4v4h-4zm0-10h4v4h-4z" opacity=".3"/><path d="M3 21h8v-8H3v8zm2-6h4v4H5v-4zm-2-4h8V3H3v8zm2-6h4v4H5V5zm8 16h8v-8h-8v8zm2-6h4v4h-4v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4z"/>');
    }
};
IconGridView_TwoTone.styles = style;
IconGridView_TwoTone = __decorate([
    customElement('mdui-icon-grid-view--two-tone')
], IconGridView_TwoTone);
export { IconGridView_TwoTone };
