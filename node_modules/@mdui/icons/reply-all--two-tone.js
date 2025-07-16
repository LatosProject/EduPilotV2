import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReplyAll_TwoTone = class IconReplyAll_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>');
    }
};
IconReplyAll_TwoTone.styles = style;
IconReplyAll_TwoTone = __decorate([
    customElement('mdui-icon-reply-all--two-tone')
], IconReplyAll_TwoTone);
export { IconReplyAll_TwoTone };
