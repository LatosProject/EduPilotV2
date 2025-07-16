import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDynamicFeed = class IconDynamicFeed extends LitElement {
    render() {
        return svgTag('<path d="M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z"/><path d="M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z"/>');
    }
};
IconDynamicFeed.styles = style;
IconDynamicFeed = __decorate([
    customElement('mdui-icon-dynamic-feed')
], IconDynamicFeed);
export { IconDynamicFeed };
