import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallSplit_TwoTone = class IconCallSplit_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 4h-6l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10zM4 4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z"/>');
    }
};
IconCallSplit_TwoTone.styles = style;
IconCallSplit_TwoTone = __decorate([
    customElement('mdui-icon-call-split--two-tone')
], IconCallSplit_TwoTone);
export { IconCallSplit_TwoTone };
