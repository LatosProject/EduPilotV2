import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDataArray_Sharp = class IconDataArray_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"/>');
    }
};
IconDataArray_Sharp.styles = style;
IconDataArray_Sharp = __decorate([
    customElement('mdui-icon-data-array--sharp')
], IconDataArray_Sharp);
export { IconDataArray_Sharp };
