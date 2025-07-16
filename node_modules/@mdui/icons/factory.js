import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFactory = class IconFactory extends LitElement {
    render() {
        return svgTag('<path d="M22 10v12H2V10l7-3v2l5-2v3h8zm-4.8-1.5L18 2h3l.8 6.5h-4.6zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z"/>');
    }
};
IconFactory.styles = style;
IconFactory = __decorate([
    customElement('mdui-icon-factory')
], IconFactory);
export { IconFactory };
