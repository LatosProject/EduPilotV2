import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCheck_TwoTone = class IconCheck_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>');
    }
};
IconCheck_TwoTone.styles = style;
IconCheck_TwoTone = __decorate([
    customElement('mdui-icon-check--two-tone')
], IconCheck_TwoTone);
export { IconCheck_TwoTone };
