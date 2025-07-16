import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFastRewind_Outlined = class IconFastRewind_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 9.86v4.28L14.97 12 18 9.86m-9 0v4.28L5.97 12 9 9.86M20 6l-8.5 6 8.5 6V6zm-9 0-8.5 6 8.5 6V6z"/>');
    }
};
IconFastRewind_Outlined.styles = style;
IconFastRewind_Outlined = __decorate([
    customElement('mdui-icon-fast-rewind--outlined')
], IconFastRewind_Outlined);
export { IconFastRewind_Outlined };
