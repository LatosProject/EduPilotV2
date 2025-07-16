import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRateReview_Sharp = class IconRateReview_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h16V2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"/>');
    }
};
IconRateReview_Sharp.styles = style;
IconRateReview_Sharp = __decorate([
    customElement('mdui-icon-rate-review--sharp')
], IconRateReview_Sharp);
export { IconRateReview_Sharp };
