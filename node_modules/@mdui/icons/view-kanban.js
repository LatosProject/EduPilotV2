import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewKanban = class IconViewKanban extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7V7h2v10zm4-5h-2V7h2v5zm4 3h-2V7h2v8z"/>');
    }
};
IconViewKanban.styles = style;
IconViewKanban = __decorate([
    customElement('mdui-icon-view-kanban')
], IconViewKanban);
export { IconViewKanban };
