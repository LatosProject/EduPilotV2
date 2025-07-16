import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallSplit = class IconCallSplit extends LitElement {
    render() {
        return svgTag('<path d="m14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"/>');
    }
};
IconCallSplit.styles = style;
IconCallSplit = __decorate([
    customElement('mdui-icon-call-split')
], IconCallSplit);
export { IconCallSplit };
