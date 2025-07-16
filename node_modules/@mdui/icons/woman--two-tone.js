import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWoman_TwoTone = class IconWoman_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13.94 8.31C13.62 7.52 12.85 7 12 7s-1.62.52-1.94 1.31L7 16h3v6h4v-6h3l-3.06-7.69z"/><circle cx="12" cy="4" r="2"/>');
    }
};
IconWoman_TwoTone.styles = style;
IconWoman_TwoTone = __decorate([
    customElement('mdui-icon-woman--two-tone')
], IconWoman_TwoTone);
export { IconWoman_TwoTone };
