import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGppGood = class IconGppGood extends LitElement {
    render() {
        return svgTag('<path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>');
    }
};
IconGppGood.styles = style;
IconGppGood = __decorate([
    customElement('mdui-icon-gpp-good')
], IconGppGood);
export { IconGppGood };
