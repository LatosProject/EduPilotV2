import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignBottom = class IconVerticalAlignBottom extends LitElement {
    render() {
        return svgTag('<path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>');
    }
};
IconVerticalAlignBottom.styles = style;
IconVerticalAlignBottom = __decorate([
    customElement('mdui-icon-vertical-align-bottom')
], IconVerticalAlignBottom);
export { IconVerticalAlignBottom };
