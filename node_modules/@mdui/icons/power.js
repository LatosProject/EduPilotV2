import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPower = class IconPower extends LitElement {
    render() {
        return svgTag('<path d="M16.01 7 16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"/>');
    }
};
IconPower.styles = style;
IconPower = __decorate([
    customElement('mdui-icon-power')
], IconPower);
export { IconPower };
