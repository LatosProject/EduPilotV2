import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStarPurple500_Outlined = class IconStarPurple500_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>');
    }
};
IconStarPurple500_Outlined.styles = style;
IconStarPurple500_Outlined = __decorate([
    customElement('mdui-icon-star-purple500--outlined')
], IconStarPurple500_Outlined);
export { IconStarPurple500_Outlined };
