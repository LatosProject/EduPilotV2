import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFileUpload_Sharp = class IconFileUpload_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 10h4v6h6v-6h4l-7-7-7 7zm0 8v2h14v-2H5z"/>');
    }
};
IconFileUpload_Sharp.styles = style;
IconFileUpload_Sharp = __decorate([
    customElement('mdui-icon-file-upload--sharp')
], IconFileUpload_Sharp);
export { IconFileUpload_Sharp };
