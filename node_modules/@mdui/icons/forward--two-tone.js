import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForward_TwoTone = class IconForward_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity=".3"/><path d="m20 12-8-8v4H4v8h8v4l8-8zM6 14v-4h8V8.83L17.17 12 14 15.17V14H6z"/>');
    }
};
IconForward_TwoTone.styles = style;
IconForward_TwoTone = __decorate([
    customElement('mdui-icon-forward--two-tone')
], IconForward_TwoTone);
export { IconForward_TwoTone };
