import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewKanban_TwoTone = class IconViewKanban_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zM15 7h2v8h-2V7zm-4 0h2v5h-2V7zM7 7h2v10H7V7z" opacity=".3"/><path d="M7 7h2v10H7zm4 0h2v5h-2zm4 0h2v8h-2z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>');
    }
};
IconViewKanban_TwoTone.styles = style;
IconViewKanban_TwoTone = __decorate([
    customElement('mdui-icon-view-kanban--two-tone')
], IconViewKanban_TwoTone);
export { IconViewKanban_TwoTone };
