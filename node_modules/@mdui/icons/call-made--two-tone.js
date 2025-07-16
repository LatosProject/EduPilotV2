import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMade_TwoTone = class IconCallMade_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5.41 20 17 8.41V15h2V5H9v2h6.59L4 18.59z"/>');
    }
};
IconCallMade_TwoTone.styles = style;
IconCallMade_TwoTone = __decorate([
    customElement('mdui-icon-call-made--two-tone')
], IconCallMade_TwoTone);
export { IconCallMade_TwoTone };
