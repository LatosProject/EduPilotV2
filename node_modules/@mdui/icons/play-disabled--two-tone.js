import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayDisabled_TwoTone = class IconPlayDisabled_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 12.83v2.53l1.55-.99z" opacity=".3"/><path d="M2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41L2.81 2.81zM10 15.36v-2.53l1.55 1.55-1.55.98zM19 12 8 5v.17l8.45 8.45L19 12z"/>');
    }
};
IconPlayDisabled_TwoTone.styles = style;
IconPlayDisabled_TwoTone = __decorate([
    customElement('mdui-icon-play-disabled--two-tone')
], IconPlayDisabled_TwoTone);
export { IconPlayDisabled_TwoTone };
