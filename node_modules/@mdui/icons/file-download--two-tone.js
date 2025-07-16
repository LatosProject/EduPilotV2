import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileDownload_TwoTone = class IconFileDownload_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14.17 11H13V5h-2v6H9.83L12 13.17z" opacity=".3"/><path d="M5 18h14v2H5zm14-9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11z"/>');
    }
};
IconFileDownload_TwoTone.styles = style;
IconFileDownload_TwoTone = __decorate([
    customElement('mdui-icon-file-download--two-tone')
], IconFileDownload_TwoTone);
export { IconFileDownload_TwoTone };
