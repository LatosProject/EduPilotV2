import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAutoAwesomeMotion_TwoTone = class IconAutoAwesomeMotion_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 12h8v8h-8z" opacity=".3"/><path d="M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10V2zm6 8h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10h-8v-8h8v8z"/><path d="M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10V6z"/>');
    }
};
IconAutoAwesomeMotion_TwoTone.styles = style;
IconAutoAwesomeMotion_TwoTone = __decorate([
    customElement('mdui-icon-auto-awesome-motion--two-tone')
], IconAutoAwesomeMotion_TwoTone);
export { IconAutoAwesomeMotion_TwoTone };
