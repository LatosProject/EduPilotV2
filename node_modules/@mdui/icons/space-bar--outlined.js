import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpaceBar_Outlined = class IconSpaceBar_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 9v4H6V9H4v6h16V9h-2z"/>');
    }
};
IconSpaceBar_Outlined.styles = style;
IconSpaceBar_Outlined = __decorate([
    customElement('mdui-icon-space-bar--outlined')
], IconSpaceBar_Outlined);
export { IconSpaceBar_Outlined };
