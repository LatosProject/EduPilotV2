import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileDownload_Outlined = class IconFileDownload_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z"/>');
    }
};
IconFileDownload_Outlined.styles = style;
IconFileDownload_Outlined = __decorate([
    customElement('mdui-icon-file-download--outlined')
], IconFileDownload_Outlined);
export { IconFileDownload_Outlined };
