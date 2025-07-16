import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextFields_TwoTone = class IconTextFields_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z"/>');
    }
};
IconTextFields_TwoTone.styles = style;
IconTextFields_TwoTone = __decorate([
    customElement('mdui-icon-text-fields--two-tone')
], IconTextFields_TwoTone);
export { IconTextFields_TwoTone };
