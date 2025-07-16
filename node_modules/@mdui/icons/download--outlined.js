import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDownload_Outlined = class IconDownload_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"/>');
    }
};
IconDownload_Outlined.styles = style;
IconDownload_Outlined = __decorate([
    customElement('mdui-icon-download--outlined')
], IconDownload_Outlined);
export { IconDownload_Outlined };
