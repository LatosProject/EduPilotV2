import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignHorizontalRight_Sharp = class IconAlignHorizontalRight_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z"/>');
    }
};
IconAlignHorizontalRight_Sharp.styles = style;
IconAlignHorizontalRight_Sharp = __decorate([
    customElement('mdui-icon-align-horizontal-right--sharp')
], IconAlignHorizontalRight_Sharp);
export { IconAlignHorizontalRight_Sharp };
