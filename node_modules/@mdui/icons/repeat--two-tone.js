import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRepeat_TwoTone = class IconRepeat_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 22v-3h12v-6h-2v4H7v-3l-4 4zM21 6l-4-4v3H5v6h2V7h10v3z"/>');
    }
};
IconRepeat_TwoTone.styles = style;
IconRepeat_TwoTone = __decorate([
    customElement('mdui-icon-repeat--two-tone')
], IconRepeat_TwoTone);
export { IconRepeat_TwoTone };
