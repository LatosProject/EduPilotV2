import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileDownload = class IconFileDownload extends LitElement {
    render() {
        return svgTag('<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>');
    }
};
IconFileDownload.styles = style;
IconFileDownload = __decorate([
    customElement('mdui-icon-file-download')
], IconFileDownload);
export { IconFileDownload };
