import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignVerticalBottom = class IconAlignVerticalBottom extends LitElement {
    render() {
        return svgTag('<path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>');
    }
};
IconAlignVerticalBottom.styles = style;
IconAlignVerticalBottom = __decorate([
    customElement('mdui-icon-align-vertical-bottom')
], IconAlignVerticalBottom);
export { IconAlignVerticalBottom };
