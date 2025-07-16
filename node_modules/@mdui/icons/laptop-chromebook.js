import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLaptopChromebook = class IconLaptopChromebook extends LitElement {
    render() {
        return svgTag('<path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>');
    }
};
IconLaptopChromebook.styles = style;
IconLaptopChromebook = __decorate([
    customElement('mdui-icon-laptop-chromebook')
], IconLaptopChromebook);
export { IconLaptopChromebook };
