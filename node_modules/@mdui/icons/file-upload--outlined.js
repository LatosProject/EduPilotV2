import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileUpload_Outlined = class IconFileUpload_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z"/>');
    }
};
IconFileUpload_Outlined.styles = style;
IconFileUpload_Outlined = __decorate([
    customElement('mdui-icon-file-upload--outlined')
], IconFileUpload_Outlined);
export { IconFileUpload_Outlined };
