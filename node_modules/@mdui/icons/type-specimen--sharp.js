import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTypeSpecimen_Sharp = class IconTypeSpecimen_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v16h16v-2H4z"/><path d="M22 2H6v16h16V2zm-5.37 12.5-.8-2.3H12.2l-.82 2.3H9.81l3.38-9h1.61l3.38 9h-1.55z"/><path d="m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z"/>');
    }
};
IconTypeSpecimen_Sharp.styles = style;
IconTypeSpecimen_Sharp = __decorate([
    customElement('mdui-icon-type-specimen--sharp')
], IconTypeSpecimen_Sharp);
export { IconTypeSpecimen_Sharp };
