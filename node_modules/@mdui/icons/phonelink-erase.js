import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPhonelinkErase = class IconPhonelinkErase extends LitElement {
    render() {
        return svgTag('<path d="m13 8.2-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/>');
    }
};
IconPhonelinkErase.styles = style;
IconPhonelinkErase = __decorate([
    customElement('mdui-icon-phonelink-erase')
], IconPhonelinkErase);
export { IconPhonelinkErase };
