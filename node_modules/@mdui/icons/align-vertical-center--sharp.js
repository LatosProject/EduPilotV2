import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignVerticalCenter_Sharp = class IconAlignVerticalCenter_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 11h-5V6h-3v5h-4V3H7v8H1.84v2H7v8h3v-8h4v5h3v-5h5z"/>');
    }
};
IconAlignVerticalCenter_Sharp.styles = style;
IconAlignVerticalCenter_Sharp = __decorate([
    customElement('mdui-icon-align-vertical-center--sharp')
], IconAlignVerticalCenter_Sharp);
export { IconAlignVerticalCenter_Sharp };
