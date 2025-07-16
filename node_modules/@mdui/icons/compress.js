import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompress = class IconCompress extends LitElement {
    render() {
        return svgTag('<path d="M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4zm0 3h16v2H4z"/>');
    }
};
IconCompress.styles = style;
IconCompress = __decorate([
    customElement('mdui-icon-compress')
], IconCompress);
export { IconCompress };
