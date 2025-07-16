import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalCafe_Sharp = class IconLocalCafe_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 5h-2V5h2v3zM2 21h18v-2H2v2z"/>');
    }
};
IconLocalCafe_Sharp.styles = style;
IconLocalCafe_Sharp = __decorate([
    customElement('mdui-icon-local-cafe--sharp')
], IconLocalCafe_Sharp);
export { IconLocalCafe_Sharp };
