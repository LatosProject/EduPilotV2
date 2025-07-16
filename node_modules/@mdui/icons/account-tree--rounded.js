import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountTree_Rounded = class IconAccountTree_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17 11h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1H9.01V5a2 2 0 0 0-2-2H4c-1.1 0-2 .9-2 2v4a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V8h2v7.01c0 1.65 1.34 2.99 2.99 2.99H15v1a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3a2 2 0 0 0-2 2v1h-1.01c-.54 0-.99-.45-.99-.99V8h2v1c0 1.1.9 2 2 2z"/>');
    }
};
IconAccountTree_Rounded.styles = style;
IconAccountTree_Rounded = __decorate([
    customElement('mdui-icon-account-tree--rounded')
], IconAccountTree_Rounded);
export { IconAccountTree_Rounded };
