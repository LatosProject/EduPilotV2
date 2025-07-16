import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDataset_TwoTone = class IconDataset_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zm8-12h4v4h-4V7zm0 6h4v4h-4v-4zM7 7h4v4H7V7zm0 6h4v4H7v-4z" opacity=".3"/><path d="M7 13h4v4H7zm6 0h4v4h-4z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M7 7h4v4H7zm6 0h4v4h-4z"/>');
    }
};
IconDataset_TwoTone.styles = style;
IconDataset_TwoTone = __decorate([
    customElement('mdui-icon-dataset--two-tone')
], IconDataset_TwoTone);
export { IconDataset_TwoTone };
