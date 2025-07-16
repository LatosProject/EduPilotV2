import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewQuilt = class IconViewQuilt extends LitElement {
    render() {
        return svgTag('<path d="M21 5v6.5H9.33V5H21zm-6.33 14v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zM8.33 19V5H3v14h5.33z"/>');
    }
};
IconViewQuilt.styles = style;
IconViewQuilt = __decorate([
    customElement('mdui-icon-view-quilt')
], IconViewQuilt);
export { IconViewQuilt };
