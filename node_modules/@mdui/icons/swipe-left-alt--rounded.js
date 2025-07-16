import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeLeftAlt_Rounded = class IconSwipeLeftAlt_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M10.1 13a5 5 0 1 0 0-2H5.83l.88-.88A.996.996 0 1 0 5.3 8.71L2.71 11.3a.996.996 0 0 0 0 1.41L5.3 15.3a.996.996 0 1 0 1.41-1.41L5.83 13h4.27z"/>');
    }
};
IconSwipeLeftAlt_Rounded.styles = style;
IconSwipeLeftAlt_Rounded = __decorate([
    customElement('mdui-icon-swipe-left-alt--rounded')
], IconSwipeLeftAlt_Rounded);
export { IconSwipeLeftAlt_Rounded };
