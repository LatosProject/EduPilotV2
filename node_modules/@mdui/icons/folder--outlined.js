import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolder_Outlined = class IconFolder_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m9.17 6 2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>');
    }
};
IconFolder_Outlined.styles = style;
IconFolder_Outlined = __decorate([
    customElement('mdui-icon-folder--outlined')
], IconFolder_Outlined);
export { IconFolder_Outlined };
