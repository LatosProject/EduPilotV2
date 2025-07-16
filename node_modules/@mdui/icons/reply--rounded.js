import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReply_Rounded = class IconReply_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M10 9V7.41c0-.89-1.08-1.34-1.71-.71L3.7 11.29a.996.996 0 0 0 0 1.41l4.59 4.59c.63.63 1.71.19 1.71-.7V14.9c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>');
    }
};
IconReply_Rounded.styles = style;
IconReply_Rounded = __decorate([
    customElement('mdui-icon-reply--rounded')
], IconReply_Rounded);
export { IconReply_Rounded };
