import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUpload_Sharp = class IconUpload_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9 16h6v-6h4l-7-7-7 7h4v6zm-4 2h14v2H5v-2z"/>');
    }
};
IconUpload_Sharp.styles = style;
IconUpload_Sharp = __decorate([
    customElement('mdui-icon-upload--sharp')
], IconUpload_Sharp);
export { IconUpload_Sharp };
