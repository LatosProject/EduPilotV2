import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPower_Sharp = class IconPower_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 7V3h-2v4h-4V3H8v4H6v7.5L9.5 18v3h5v-3l3.5-3.51V7h-2z"/>');
    }
};
IconPower_Sharp.styles = style;
IconPower_Sharp = __decorate([
    customElement('mdui-icon-power--sharp')
], IconPower_Sharp);
export { IconPower_Sharp };
