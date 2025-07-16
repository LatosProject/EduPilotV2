import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLaptopChromebook_TwoTone = class IconLaptopChromebook_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 5h16v10H4z" opacity=".3"/><path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>');
    }
};
IconLaptopChromebook_TwoTone.styles = style;
IconLaptopChromebook_TwoTone = __decorate([
    customElement('mdui-icon-laptop-chromebook--two-tone')
], IconLaptopChromebook_TwoTone);
export { IconLaptopChromebook_TwoTone };
