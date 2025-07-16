import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMinimize_Sharp = class IconMinimize_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 19h12v2H6v-2z"/>');
    }
};
IconMinimize_Sharp.styles = style;
IconMinimize_Sharp = __decorate([
    customElement('mdui-icon-minimize--sharp')
], IconMinimize_Sharp);
export { IconMinimize_Sharp };
