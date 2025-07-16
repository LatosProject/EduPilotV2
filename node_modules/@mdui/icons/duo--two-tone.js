import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDuo_TwoTone = class IconDuo_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 2h-8C6.38 2 2 6.66 2 12.28 2 17.5 6.49 22 11.72 22 17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2zm-3 13-3-2v2H7V9h7v2l3-2v6z"/>');
    }
};
IconDuo_TwoTone.styles = style;
IconDuo_TwoTone = __decorate([
    customElement('mdui-icon-duo--two-tone')
], IconDuo_TwoTone);
export { IconDuo_TwoTone };
