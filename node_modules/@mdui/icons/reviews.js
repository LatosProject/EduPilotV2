import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReviews = class IconReviews extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"/>');
    }
};
IconReviews.styles = style;
IconReviews = __decorate([
    customElement('mdui-icon-reviews')
], IconReviews);
export { IconReviews };
