import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStop_TwoTone = class IconStop_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 8h8v8H8z" opacity=".3"/><path d="M6 18h12V6H6v12zM8 8h8v8H8V8z"/>');
    }
};
IconStop_TwoTone.styles = style;
IconStop_TwoTone = __decorate([
    customElement('mdui-icon-stop--two-tone')
], IconStop_TwoTone);
export { IconStop_TwoTone };
