import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextIncrease_TwoTone = class IconTextIncrease_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M1.99 19h2.42l1.27-3.58h5.65L12.59 19h2.42L9.75 5h-2.5L1.99 19zm4.42-5.61L8.44 7.6h.12l2.03 5.79H6.41zM20 11h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z"/>');
    }
};
IconTextIncrease_TwoTone.styles = style;
IconTextIncrease_TwoTone = __decorate([
    customElement('mdui-icon-text-increase--two-tone')
], IconTextIncrease_TwoTone);
export { IconTextIncrease_TwoTone };
