import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddchart_Sharp = class IconAddchart_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11 9h2v8h-2V9zm-2 8v-6H7v6h2zm10 2H5V5h6V3H3v18h18v-8h-2v6zm-4-6v4h2v-4h-2zm4-8V2h-2v3h-3v2h3v3h2V7h3V5h-3z"/>');
    }
};
IconAddchart_Sharp.styles = style;
IconAddchart_Sharp = __decorate([
    customElement('mdui-icon-addchart--sharp')
], IconAddchart_Sharp);
export { IconAddchart_Sharp };
