import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDragHandle_Sharp = class IconDragHandle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z"/>');
    }
};
IconDragHandle_Sharp.styles = style;
IconDragHandle_Sharp = __decorate([
    customElement('mdui-icon-drag-handle--sharp')
], IconDragHandle_Sharp);
export { IconDragHandle_Sharp };
