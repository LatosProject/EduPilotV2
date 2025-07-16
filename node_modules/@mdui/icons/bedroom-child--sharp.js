import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBedroomChild_Sharp = class IconBedroomChild_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9 8.5h6v2H9zM7.51 12h9v2h-9z"/><path d="M22 2H2v20h20V2zm-4 15h-1.5v-1.5h-9V17H6v-6.32l1.5-.01V7h9v3.67H18V17z"/>');
    }
};
IconBedroomChild_Sharp.styles = style;
IconBedroomChild_Sharp = __decorate([
    customElement('mdui-icon-bedroom-child--sharp')
], IconBedroomChild_Sharp);
export { IconBedroomChild_Sharp };
