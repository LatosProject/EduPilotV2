import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEscalator_Sharp = class IconEscalator_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-2.5 6h-3.2l-5 9H5.5v-3h3.2l5-9h4.8v3z"/>');
    }
};
IconEscalator_Sharp.styles = style;
IconEscalator_Sharp = __decorate([
    customElement('mdui-icon-escalator--sharp')
], IconEscalator_Sharp);
export { IconEscalator_Sharp };
