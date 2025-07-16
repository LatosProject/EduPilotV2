import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToken_Outlined = class IconToken_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m21 7-9-5-9 5v10l9 5 9-5V7zm-9-2.71 5.91 3.28-3.01 1.67C14.17 8.48 13.14 8 12 8s-2.17.48-2.9 1.24L6.09 7.57 12 4.29zm-1 14.87-6-3.33V9.26L8.13 11c-.09.31-.13.65-.13 1 0 1.86 1.27 3.43 3 3.87v3.29zM10 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm3 7.16v-3.28c1.73-.44 3-2.01 3-3.87 0-.35-.04-.69-.13-1.01L19 9.26v6.57l-6 3.33z"/>');
    }
};
IconToken_Outlined.styles = style;
IconToken_Outlined = __decorate([
    customElement('mdui-icon-token--outlined')
], IconToken_Outlined);
export { IconToken_Outlined };
