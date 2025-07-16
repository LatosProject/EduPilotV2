import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGridGoldenratio = class IconGridGoldenratio extends LitElement {
    render() {
        return svgTag('<path d="M22 11V9h-7V2h-2v7h-2V2H9v7H2v2h7v2H2v2h7v7h2v-7h2v7h2v-7h7v-2h-7v-2h7zm-9 2h-2v-2h2v2z"/>');
    }
};
IconGridGoldenratio.styles = style;
IconGridGoldenratio = __decorate([
    customElement('mdui-icon-grid-goldenratio')
], IconGridGoldenratio);
export { IconGridGoldenratio };
