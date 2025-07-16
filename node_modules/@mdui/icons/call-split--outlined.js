import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallSplit_Outlined = class IconCallSplit_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m14 4 2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4h-6zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z"/>');
    }
};
IconCallSplit_Outlined.styles = style;
IconCallSplit_Outlined = __decorate([
    customElement('mdui-icon-call-split--outlined')
], IconCallSplit_Outlined);
export { IconCallSplit_Outlined };
