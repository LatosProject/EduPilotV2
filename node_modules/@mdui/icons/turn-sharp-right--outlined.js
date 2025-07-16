import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnSharpRight_Outlined = class IconTurnSharpRight_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m18 6.83 1.59 1.59L21 7l-4-4-4 4 1.41 1.41L16 6.83V13H8c-1.1 0-2 .9-2 2v6h2v-6h8c1.1 0 2-.9 2-2V6.83z"/>');
    }
};
IconTurnSharpRight_Outlined.styles = style;
IconTurnSharpRight_Outlined = __decorate([
    customElement('mdui-icon-turn-sharp-right--outlined')
], IconTurnSharpRight_Outlined);
export { IconTurnSharpRight_Outlined };
