import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnSharpLeft = class IconTurnSharpLeft extends LitElement {
    render() {
        return svgTag('<path d="M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h8c1.1 0 2 .9 2 2v6h-2v-6H8c-1.1 0-2-.9-2-2V6.83z"/>');
    }
};
IconTurnSharpLeft.styles = style;
IconTurnSharpLeft = __decorate([
    customElement('mdui-icon-turn-sharp-left')
], IconTurnSharpLeft);
export { IconTurnSharpLeft };
