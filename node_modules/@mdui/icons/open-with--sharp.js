import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOpenWith_Sharp = class IconOpenWith_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"/>');
    }
};
IconOpenWith_Sharp.styles = style;
IconOpenWith_Sharp = __decorate([
    customElement('mdui-icon-open-with--sharp')
], IconOpenWith_Sharp);
export { IconOpenWith_Sharp };
