import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartphone_Outlined = class IconSmartphone_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>');
    }
};
IconSmartphone_Outlined.styles = style;
IconSmartphone_Outlined = __decorate([
    customElement('mdui-icon-smartphone--outlined')
], IconSmartphone_Outlined);
export { IconSmartphone_Outlined };
