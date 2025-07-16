import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDownload = class IconDownload extends LitElement {
    render() {
        return svgTag('<path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/>');
    }
};
IconDownload.styles = style;
IconDownload = __decorate([
    customElement('mdui-icon-download')
], IconDownload);
export { IconDownload };
