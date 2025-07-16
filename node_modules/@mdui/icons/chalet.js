import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChalet = class IconChalet extends LitElement {
    render() {
        return svgTag('<path d="m10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15 10 7.5zm12-1h-1.19l.75-.75-.71-.71-1.46 1.46h-.89v-.89l1.45-1.45-.71-.71-.74.74V3h-1v1.19l-.75-.75-.71.71 1.45 1.45v.9h-.89l-1.45-1.45-.71.71.75.75H14v1h1.19l-.75.75.71.71 1.45-1.45h.89v.89l-1.45 1.45.71.71.75-.75V11h1V9.81l.75.75.71-.71-1.46-1.46V7.5h.89l1.45 1.45.71-.71-.74-.74H22v-1z"/>');
    }
};
IconChalet.styles = style;
IconChalet = __decorate([
    customElement('mdui-icon-chalet')
], IconChalet);
export { IconChalet };
