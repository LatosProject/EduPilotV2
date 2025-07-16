import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFastForward_Outlined = class IconFastForward_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 9.86 18.03 12 15 14.14V9.86m-9 0L9.03 12 6 14.14V9.86M13 6v12l8.5-6L13 6zM4 6v12l8.5-6L4 6z"/>');
    }
};
IconFastForward_Outlined.styles = style;
IconFastForward_Outlined = __decorate([
    customElement('mdui-icon-fast-forward--outlined')
], IconFastForward_Outlined);
export { IconFastForward_Outlined };
