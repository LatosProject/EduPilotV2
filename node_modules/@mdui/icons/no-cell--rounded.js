import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoCell_Rounded = class IconNoCell_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m8.83 6-3.7-3.7C5.42 1.55 6.15 1 7 1l10 .01c1.1 0 2 .89 2 1.99v13.17l-2-2V6H8.83zm11.66 15.9a.996.996 0 0 1-1.41 0l-.2-.2c-.3.75-1.03 1.3-1.88 1.3H7c-1.1 0-2-.9-2-2V7.83l-2.9-2.9a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM15.17 18 7 9.83V18h8.17z"/>');
    }
};
IconNoCell_Rounded.styles = style;
IconNoCell_Rounded = __decorate([
    customElement('mdui-icon-no-cell--rounded')
], IconNoCell_Rounded);
export { IconNoCell_Rounded };
