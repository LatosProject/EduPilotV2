import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeed_Outlined = class IconFeed_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zm3 16H5V5h10v4h4v10zM7 17h10v-2H7v2zm5-10H7v2h5V7zm-5 6h10v-2H7v2z"/>');
    }
};
IconFeed_Outlined.styles = style;
IconFeed_Outlined = __decorate([
    customElement('mdui-icon-feed--outlined')
], IconFeed_Outlined);
export { IconFeed_Outlined };
