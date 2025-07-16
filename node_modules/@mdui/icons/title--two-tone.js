import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTitle_TwoTone = class IconTitle_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 7h5.5v12h3V7H19V4H5z"/>');
    }
};
IconTitle_TwoTone.styles = style;
IconTitle_TwoTone = __decorate([
    customElement('mdui-icon-title--two-tone')
], IconTitle_TwoTone);
export { IconTitle_TwoTone };
