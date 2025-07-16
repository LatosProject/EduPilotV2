import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReply_TwoTone = class IconReply_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>');
    }
};
IconReply_TwoTone.styles = style;
IconReply_TwoTone = __decorate([
    customElement('mdui-icon-reply--two-tone')
], IconReply_TwoTone);
export { IconReply_TwoTone };
