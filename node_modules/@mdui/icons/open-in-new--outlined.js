import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenInNew_Outlined = class IconOpenInNew_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>');
    }
};
IconOpenInNew_Outlined.styles = style;
IconOpenInNew_Outlined = __decorate([
    customElement('mdui-icon-open-in-new--outlined')
], IconOpenInNew_Outlined);
export { IconOpenInNew_Outlined };
