import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFiberPin_Outlined = class IconFiberPin_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11 15h1.5V9H11v6zm7.75-6v3.5L16.25 9H15v6h1.25v-3.5L18.8 15H20V9h-1.25zM7.5 9H4v6h1.5v-2h2c.85 0 1.5-.65 1.5-1.5v-1C9 9.65 8.35 9 7.5 9zm0 2.5h-2v-1h2v1z"/>');
    }
};
IconFiberPin_Outlined.styles = style;
IconFiberPin_Outlined = __decorate([
    customElement('mdui-icon-fiber-pin--outlined')
], IconFiberPin_Outlined);
export { IconFiberPin_Outlined };
