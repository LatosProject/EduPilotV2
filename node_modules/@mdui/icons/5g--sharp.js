import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon5g_Sharp = class Icon5g_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 13h2v2h-5V9h7V7h-9v10h9v-6h-4zM3 13h5v2H3v2h7v-6H5V9h5V7H3z"/>');
    }
};
Icon5g_Sharp.styles = style;
Icon5g_Sharp = __decorate([
    customElement('mdui-icon-5g--sharp')
], Icon5g_Sharp);
export { Icon5g_Sharp };
