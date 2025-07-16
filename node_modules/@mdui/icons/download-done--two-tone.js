import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDownloadDone_TwoTone = class IconDownloadDone_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 18h14v2H5v-2zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2-9.4 9.3z"/>');
    }
};
IconDownloadDone_TwoTone.styles = style;
IconDownloadDone_TwoTone = __decorate([
    customElement('mdui-icon-download-done--two-tone')
], IconDownloadDone_TwoTone);
export { IconDownloadDone_TwoTone };
