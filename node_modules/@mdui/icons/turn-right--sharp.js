import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnRight_Sharp = class IconTurnRight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m17.17 11-1.58 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H7v11h2v-9z"/>');
    }
};
IconTurnRight_Sharp.styles = style;
IconTurnRight_Sharp = __decorate([
    customElement('mdui-icon-turn-right--sharp')
], IconTurnRight_Sharp);
export { IconTurnRight_Sharp };
