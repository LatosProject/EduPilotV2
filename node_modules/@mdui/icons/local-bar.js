import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalBar = class IconLocalBar extends LitElement {
    render() {
        return svgTag('<path d="M21 5V3H3v2l8 9v5H6v2h12v-2h-5v-5l8-9zM7.43 7 5.66 5h12.69l-1.78 2H7.43z"/>');
    }
};
IconLocalBar.styles = style;
IconLocalBar = __decorate([
    customElement('mdui-icon-local-bar')
], IconLocalBar);
export { IconLocalBar };
