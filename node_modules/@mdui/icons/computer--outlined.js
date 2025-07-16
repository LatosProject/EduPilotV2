import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconComputer_Outlined = class IconComputer_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>');
    }
};
IconComputer_Outlined.styles = style;
IconComputer_Outlined = __decorate([
    customElement('mdui-icon-computer--outlined')
], IconComputer_Outlined);
export { IconComputer_Outlined };
