import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMailOutline_TwoTone = class IconMailOutline_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>');
    }
};
IconMailOutline_TwoTone.styles = style;
IconMailOutline_TwoTone = __decorate([
    customElement('mdui-icon-mail-outline--two-tone')
], IconMailOutline_TwoTone);
export { IconMailOutline_TwoTone };
