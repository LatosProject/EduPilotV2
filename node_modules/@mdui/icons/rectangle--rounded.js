import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRectangle_Rounded = class IconRectangle_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"/>');
    }
};
IconRectangle_Rounded.styles = style;
IconRectangle_Rounded = __decorate([
    customElement('mdui-icon-rectangle--rounded')
], IconRectangle_Rounded);
export { IconRectangle_Rounded };
