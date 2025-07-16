import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDragHandle_TwoTone = class IconDragHandle_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 9h16v2H4zm0 4h16v2H4z"/>');
    }
};
IconDragHandle_TwoTone.styles = style;
IconDragHandle_TwoTone = __decorate([
    customElement('mdui-icon-drag-handle--two-tone')
], IconDragHandle_TwoTone);
export { IconDragHandle_TwoTone };
