import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAssistantPhoto_TwoTone = class IconAssistantPhoto_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m14.24 12 .4 2H18V8h-5.24l-.4-2H7v6z" opacity=".3"/><path d="M7 14h5.6l.4 2h7V6h-5.6L14 4H5v17h2v-7zm0-8h5.36l.4 2H18v6h-3.36l-.4-2H7V6z"/>');
    }
};
IconAssistantPhoto_TwoTone.styles = style;
IconAssistantPhoto_TwoTone = __decorate([
    customElement('mdui-icon-assistant-photo--two-tone')
], IconAssistantPhoto_TwoTone);
export { IconAssistantPhoto_TwoTone };
