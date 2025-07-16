import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewArray = class IconViewArray extends LitElement {
    render() {
        return svgTag('<path d="M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z"/>');
    }
};
IconViewArray.styles = style;
IconViewArray = __decorate([
    customElement('mdui-icon-view-array')
], IconViewArray);
export { IconViewArray };
