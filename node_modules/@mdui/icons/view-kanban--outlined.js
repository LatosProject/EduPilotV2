import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewKanban_Outlined = class IconViewKanban_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7 7h2v10H7zm4 0h2v5h-2zm4 0h2v8h-2z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>');
    }
};
IconViewKanban_Outlined.styles = style;
IconViewKanban_Outlined = __decorate([
    customElement('mdui-icon-view-kanban--outlined')
], IconViewKanban_Outlined);
export { IconViewKanban_Outlined };
