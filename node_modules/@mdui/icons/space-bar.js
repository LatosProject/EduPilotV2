import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSpaceBar = class IconSpaceBar extends LitElement {
    render() {
        return svgTag('<path d="M18 9v4H6V9H4v6h16V9z"/>');
    }
};
IconSpaceBar.styles = style;
IconSpaceBar = __decorate([
    customElement('mdui-icon-space-bar')
], IconSpaceBar);
export { IconSpaceBar };
