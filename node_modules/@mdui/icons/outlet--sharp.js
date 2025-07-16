import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutlet_Sharp = class IconOutlet_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 12V7h2v5H8zm6 6h-4v-1.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16v2zm2-6h-2V7h2v5z"/>');
    }
};
IconOutlet_Sharp.styles = style;
IconOutlet_Sharp = __decorate([
    customElement('mdui-icon-outlet--sharp')
], IconOutlet_Sharp);
export { IconOutlet_Sharp };
