import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNote_TwoTone = class IconNote_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 6H4v12.01h16V11h-5z" opacity=".3"/><path d="M4 4c-1.1 0-2 .9-2 2v12.01c0 1.1.9 1.99 2 1.99h16c1.1 0 2-.9 2-2v-8l-6-6H4zm16 14.01H4V6h11v5h5v7.01z"/>');
    }
};
IconNote_TwoTone.styles = style;
IconNote_TwoTone = __decorate([
    customElement('mdui-icon-note--two-tone')
], IconNote_TwoTone);
export { IconNote_TwoTone };
