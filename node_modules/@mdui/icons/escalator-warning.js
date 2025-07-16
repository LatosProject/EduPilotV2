import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEscalatorWarning = class IconEscalatorWarning extends LitElement {
    render() {
        return svgTag('<path d="M6.5 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S17.83 8 17 8s-1.5.67-1.5 1.5zm3 2.5h-2.84c-.58.01-1.14.32-1.45.86l-.92 1.32L9.72 8a2.02 2.02 0 0 0-1.71-1H5c-1.1 0-2 .9-2 2v6h1.5v7h5V11.61L12.03 16h2.2l.77-1.1V22h4v-5h1v-3.5c0-.82-.67-1.5-1.5-1.5z"/>');
    }
};
IconEscalatorWarning.styles = style;
IconEscalatorWarning = __decorate([
    customElement('mdui-icon-escalator-warning')
], IconEscalatorWarning);
export { IconEscalatorWarning };
