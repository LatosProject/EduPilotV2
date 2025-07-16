import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayDisabled_Outlined = class IconPlayDisabled_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16.45 13.62 19 12 8 5v.17zM2.81 2.81 1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41L2.81 2.81zM10 15.36v-2.53l1.55 1.55-1.55.98z"/>');
    }
};
IconPlayDisabled_Outlined.styles = style;
IconPlayDisabled_Outlined = __decorate([
    customElement('mdui-icon-play-disabled--outlined')
], IconPlayDisabled_Outlined);
export { IconPlayDisabled_Outlined };
