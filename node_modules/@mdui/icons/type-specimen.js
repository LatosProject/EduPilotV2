import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTypeSpecimen = class IconTypeSpecimen extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.37 12.5-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9h-1.55z"/><path d="m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z"/>');
    }
};
IconTypeSpecimen.styles = style;
IconTypeSpecimen = __decorate([
    customElement('mdui-icon-type-specimen')
], IconTypeSpecimen);
export { IconTypeSpecimen };
