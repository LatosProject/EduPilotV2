import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAutoAwesomeMotion = class IconAutoAwesomeMotion extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4a2 2 0 0 0-2 2v10h2V4h10V2zm4 4H8a2 2 0 0 0-2 2v10h2V8h10V6zm2 4h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2z"/>');
    }
};
IconAutoAwesomeMotion.styles = style;
IconAutoAwesomeMotion = __decorate([
    customElement('mdui-icon-auto-awesome-motion')
], IconAutoAwesomeMotion);
export { IconAutoAwesomeMotion };
