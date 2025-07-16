import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEdgesensorLow_Sharp = class IconEdgesensorLow_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 7h2v7H2V7zm18 3h2v7h-2v-7zM6 2v20h12V2H6zm10 15H8V7h8v10z"/>');
    }
};
IconEdgesensorLow_Sharp.styles = style;
IconEdgesensorLow_Sharp = __decorate([
    customElement('mdui-icon-edgesensor-low--sharp')
], IconEdgesensorLow_Sharp);
export { IconEdgesensorLow_Sharp };
