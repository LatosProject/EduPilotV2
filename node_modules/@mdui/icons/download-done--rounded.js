import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDownloadDone_Rounded = class IconDownloadDone_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.01-4.1a2 2 0 0 1-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93z"/>');
    }
};
IconDownloadDone_Rounded.styles = style;
IconDownloadDone_Rounded = __decorate([
    customElement('mdui-icon-download-done--rounded')
], IconDownloadDone_Rounded);
export { IconDownloadDone_Rounded };
