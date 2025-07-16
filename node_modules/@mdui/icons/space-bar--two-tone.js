import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpaceBar_TwoTone = class IconSpaceBar_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 13H6V9H4v6h16V9h-2z"/>');
    }
};
IconSpaceBar_TwoTone.styles = style;
IconSpaceBar_TwoTone = __decorate([
    customElement('mdui-icon-space-bar--two-tone')
], IconSpaceBar_TwoTone);
export { IconSpaceBar_TwoTone };
