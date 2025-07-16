import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatUnderlined_Outlined = class IconFormatUnderlined_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/>');
    }
};
IconFormatUnderlined_Outlined.styles = style;
IconFormatUnderlined_Outlined = __decorate([
    customElement('mdui-icon-format-underlined--outlined')
], IconFormatUnderlined_Outlined);
export { IconFormatUnderlined_Outlined };
