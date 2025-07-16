import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRepeat = class IconRepeat extends LitElement {
    render() {
        return svgTag('<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>');
    }
};
IconRepeat.styles = style;
IconRepeat = __decorate([
    customElement('mdui-icon-repeat')
], IconRepeat);
export { IconRepeat };
