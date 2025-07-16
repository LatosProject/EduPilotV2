import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNorth_TwoTone = class IconNorth_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"/>');
    }
};
IconNorth_TwoTone.styles = style;
IconNorth_TwoTone = __decorate([
    customElement('mdui-icon-north--two-tone')
], IconNorth_TwoTone);
export { IconNorth_TwoTone };
