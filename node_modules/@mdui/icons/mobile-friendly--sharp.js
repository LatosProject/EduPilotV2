import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMobileFriendly_Sharp = class IconMobileFriendly_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 1H7v5h2V4h10v16H9v-2H7v5h14V1zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z"/>');
    }
};
IconMobileFriendly_Sharp.styles = style;
IconMobileFriendly_Sharp = __decorate([
    customElement('mdui-icon-mobile-friendly--sharp')
], IconMobileFriendly_Sharp);
export { IconMobileFriendly_Sharp };
