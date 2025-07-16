import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileDownloadDone_Outlined = class IconFileDownloadDone_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20.13 5.41 18.72 4l-9.19 9.19-4.25-4.24-1.41 1.41 5.66 5.66zM5 18h14v2H5z"/>');
    }
};
IconFileDownloadDone_Outlined.styles = style;
IconFileDownloadDone_Outlined = __decorate([
    customElement('mdui-icon-file-download-done--outlined')
], IconFileDownloadDone_Outlined);
export { IconFileDownloadDone_Outlined };
