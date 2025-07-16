import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableRows_Rounded = class IconTableRows_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 8H5c-1.1 0-2-.9-2-2s.9-2 2-2h14c1.1 0 2 .9 2 2s-.9 2-2 2zm0 2H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2zm0 6H5c-1.1 0-2 .9-2 2s.9 2 2 2h14c1.1 0 2-.9 2-2s-.9-2-2-2z"/>');
    }
};
IconTableRows_Rounded.styles = style;
IconTableRows_Rounded = __decorate([
    customElement('mdui-icon-table-rows--rounded')
], IconTableRows_Rounded);
export { IconTableRows_Rounded };
