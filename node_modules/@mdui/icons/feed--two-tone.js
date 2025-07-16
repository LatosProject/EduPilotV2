import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeed_TwoTone = class IconFeed_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 5H5v14h14V9h-4V5zM7 7h5v2H7V7zm10 10H7v-2h10v2zm0-6v2H7v-2h10z" opacity=".3"/><path d="M7 13h10v-2H7v2zm0 4h10v-2H7v2zm9-14H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zm3 16H5V5h10v4h4v10zM12 7H7v2h5V7z"/>');
    }
};
IconFeed_TwoTone.styles = style;
IconFeed_TwoTone = __decorate([
    customElement('mdui-icon-feed--two-tone')
], IconFeed_TwoTone);
export { IconFeed_TwoTone };
