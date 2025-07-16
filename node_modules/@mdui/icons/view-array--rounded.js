import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewArray_Rounded = class IconViewArray_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 5h-1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-4 0H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM5 5H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/>');
    }
};
IconViewArray_Rounded.styles = style;
IconViewArray_Rounded = __decorate([
    customElement('mdui-icon-view-array--rounded')
], IconViewArray_Rounded);
export { IconViewArray_Rounded };
