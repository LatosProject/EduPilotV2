import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewKanban_Sharp = class IconViewKanban_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM9 17H7V7h2v10zm4-5h-2V7h2v5zm4 3h-2V7h2v8z"/>');
    }
};
IconViewKanban_Sharp.styles = style;
IconViewKanban_Sharp = __decorate([
    customElement('mdui-icon-view-kanban--sharp')
], IconViewKanban_Sharp);
export { IconViewKanban_Sharp };
