import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnLeft_Sharp = class IconTurnLeft_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m6.83 11 1.58 1.59L7 14l-4-4 4-4 1.41 1.41L6.83 9H17v11h-2v-9z"/>');
    }
};
IconTurnLeft_Sharp.styles = style;
IconTurnLeft_Sharp = __decorate([
    customElement('mdui-icon-turn-left--sharp')
], IconTurnLeft_Sharp);
export { IconTurnLeft_Sharp };
