import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnSlightRight_TwoTone = class IconTurnSlightRight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-7.58c0-.53.21-1.04.59-1.41l5-5h-2.25z"/>');
    }
};
IconTurnSlightRight_TwoTone.styles = style;
IconTurnSlightRight_TwoTone = __decorate([
    customElement('mdui-icon-turn-slight-right--two-tone')
], IconTurnSlightRight_TwoTone);
export { IconTurnSlightRight_TwoTone };
