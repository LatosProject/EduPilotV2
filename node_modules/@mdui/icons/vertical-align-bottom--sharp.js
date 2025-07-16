import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignBottom_Sharp = class IconVerticalAlignBottom_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>');
    }
};
IconVerticalAlignBottom_Sharp.styles = style;
IconVerticalAlignBottom_Sharp = __decorate([
    customElement('mdui-icon-vertical-align-bottom--sharp')
], IconVerticalAlignBottom_Sharp);
export { IconVerticalAlignBottom_Sharp };
