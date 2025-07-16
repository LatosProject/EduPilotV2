import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenWith_Outlined = class IconOpenWith_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/>');
    }
};
IconOpenWith_Outlined.styles = style;
IconOpenWith_Outlined = __decorate([
    customElement('mdui-icon-open-with--outlined')
], IconOpenWith_Outlined);
export { IconOpenWith_Outlined };
