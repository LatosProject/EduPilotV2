import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnRight = class IconTurnRight extends LitElement {
    render() {
        return svgTag('<path d="m17.17 11-1.59 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9h8.17z"/>');
    }
};
IconTurnRight.styles = style;
IconTurnRight = __decorate([
    customElement('mdui-icon-turn-right')
], IconTurnRight);
export { IconTurnRight };
