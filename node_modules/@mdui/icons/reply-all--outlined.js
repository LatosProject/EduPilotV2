import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReplyAll_Outlined = class IconReplyAll_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>');
    }
};
IconReplyAll_Outlined.styles = style;
IconReplyAll_Outlined = __decorate([
    customElement('mdui-icon-reply-all--outlined')
], IconReplyAll_Outlined);
export { IconReplyAll_Outlined };
