import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewArray_Sharp = class IconViewArray_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z"/>');
    }
};
IconViewArray_Sharp.styles = style;
IconViewArray_Sharp = __decorate([
    customElement('mdui-icon-view-array--sharp')
], IconViewArray_Sharp);
export { IconViewArray_Sharp };
