import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReviews_Sharp = class IconReviews_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2zm-8.43 9.57L12 15l-1.57-3.43L7 10l3.43-1.57L12 5l1.57 3.43L17 10l-3.43 1.57z"/>');
    }
};
IconReviews_Sharp.styles = style;
IconReviews_Sharp = __decorate([
    customElement('mdui-icon-reviews--sharp')
], IconReviews_Sharp);
export { IconReviews_Sharp };
