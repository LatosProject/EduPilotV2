import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDragHandle_Rounded = class IconDragHandle_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"/>');
    }
};
IconDragHandle_Rounded.styles = style;
IconDragHandle_Rounded = __decorate([
    customElement('mdui-icon-drag-handle--rounded')
], IconDragHandle_Rounded);
export { IconDragHandle_Rounded };
