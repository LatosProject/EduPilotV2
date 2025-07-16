import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartphone_Sharp = class IconSmartphone_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 1v22h14V1H5zm12 18H7V5h10v14z"/>');
    }
};
IconSmartphone_Sharp.styles = style;
IconSmartphone_Sharp = __decorate([
    customElement('mdui-icon-smartphone--sharp')
], IconSmartphone_Sharp);
export { IconSmartphone_Sharp };
