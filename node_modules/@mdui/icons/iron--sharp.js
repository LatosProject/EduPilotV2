import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIron_Sharp = class IconIron_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 6v8h-1V7H7v3h2V9h6v2H6c-2.21 0-4 1.79-4 4v3h15v-2h3V8h2V6h-4z"/>');
    }
};
IconIron_Sharp.styles = style;
IconIron_Sharp = __decorate([
    customElement('mdui-icon-iron--sharp')
], IconIron_Sharp);
export { IconIron_Sharp };
