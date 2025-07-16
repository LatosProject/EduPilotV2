import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTerminal_Sharp = class IconTerminal_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 4v16h20V4H2zm18 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4-4 4z"/>');
    }
};
IconTerminal_Sharp.styles = style;
IconTerminal_Sharp = __decorate([
    customElement('mdui-icon-terminal--sharp')
], IconTerminal_Sharp);
export { IconTerminal_Sharp };
