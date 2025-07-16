import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDynamicFeed_Sharp = class IconDynamicFeed_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M8 8H6v9h11v-2H8z"/><path d="M22 3H10v10h12V3zm-2 8h-8V7h8v4zM4 12H2v9h11v-2H4z"/>');
    }
};
IconDynamicFeed_Sharp.styles = style;
IconDynamicFeed_Sharp = __decorate([
    customElement('mdui-icon-dynamic-feed--sharp')
], IconDynamicFeed_Sharp);
export { IconDynamicFeed_Sharp };
