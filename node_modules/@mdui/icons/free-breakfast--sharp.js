import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFreeBreakfast_Sharp = class IconFreeBreakfast_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 3H4v14h14v-7h2a2 2 0 0 0 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4v-2z"/>');
    }
};
IconFreeBreakfast_Sharp.styles = style;
IconFreeBreakfast_Sharp = __decorate([
    customElement('mdui-icon-free-breakfast--sharp')
], IconFreeBreakfast_Sharp);
export { IconFreeBreakfast_Sharp };
