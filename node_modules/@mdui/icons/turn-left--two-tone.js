import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnLeft_TwoTone = class IconTurnLeft_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m6.83 11 1.59 1.59L7 14l-4-4 4-4 1.41 1.41L6.83 9H15c1.1 0 2 .9 2 2v9h-2v-9H6.83z"/>');
    }
};
IconTurnLeft_TwoTone.styles = style;
IconTurnLeft_TwoTone = __decorate([
    customElement('mdui-icon-turn-left--two-tone')
], IconTurnLeft_TwoTone);
export { IconTurnLeft_TwoTone };
