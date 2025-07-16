import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDeveloperBoard_Sharp = class IconDeveloperBoard_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 9V7h-2V3H2v18h18v-4h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z"/>');
    }
};
IconDeveloperBoard_Sharp.styles = style;
IconDeveloperBoard_Sharp = __decorate([
    customElement('mdui-icon-developer-board--sharp')
], IconDeveloperBoard_Sharp);
export { IconDeveloperBoard_Sharp };
