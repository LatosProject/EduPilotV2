import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRepeatOne_TwoTone = class IconRepeatOne_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13 15V9h-1l-2 1v1h1.5v4zm6-2h-2v4H7v-3l-4 4 4 4v-3h12zM17 2v3H5v6h2V7h10v3l4-4z"/>');
    }
};
IconRepeatOne_TwoTone.styles = style;
IconRepeatOne_TwoTone = __decorate([
    customElement('mdui-icon-repeat-one--two-tone')
], IconRepeatOne_TwoTone);
export { IconRepeatOne_TwoTone };
