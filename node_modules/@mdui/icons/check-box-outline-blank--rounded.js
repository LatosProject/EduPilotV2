import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCheckBoxOutlineBlank_Rounded = class IconCheckBoxOutlineBlank_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>');
    }
};
IconCheckBoxOutlineBlank_Rounded.styles = style;
IconCheckBoxOutlineBlank_Rounded = __decorate([
    customElement('mdui-icon-check-box-outline-blank--rounded')
], IconCheckBoxOutlineBlank_Rounded);
export { IconCheckBoxOutlineBlank_Rounded };
