import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMobileFriendly_Outlined = class IconMobileFriendly_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7.01 13.47l-2.55-2.55-1.27 1.27L7 16l7.19-7.19-1.27-1.27-5.91 5.93z"/>');
    }
};
IconMobileFriendly_Outlined.styles = style;
IconMobileFriendly_Outlined = __decorate([
    customElement('mdui-icon-mobile-friendly--outlined')
], IconMobileFriendly_Outlined);
export { IconMobileFriendly_Outlined };
