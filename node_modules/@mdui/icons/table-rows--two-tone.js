import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableRows_TwoTone = class IconTableRows_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 5v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z"/>');
    }
};
IconTableRows_TwoTone.styles = style;
IconTableRows_TwoTone = __decorate([
    customElement('mdui-icon-table-rows--two-tone')
], IconTableRows_TwoTone);
export { IconTableRows_TwoTone };
