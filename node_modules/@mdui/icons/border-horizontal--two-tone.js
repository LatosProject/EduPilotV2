import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderHorizontal_TwoTone = class IconBorderHorizontal_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 3h2v2h-2zm8 0h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zM3 19h2v2H3zm0-4h2v2H3zm0-8h2v2H3zm4 12h2v2H7zm4-12h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm12 16h2v2h-2zm-4 0h2v2h-2zm8-4h2v2h-2zm0 4h2v2h-2zm-8-4h2v2h-2zm-8-4h18v2H3z"/>');
    }
};
IconBorderHorizontal_TwoTone.styles = style;
IconBorderHorizontal_TwoTone = __decorate([
    customElement('mdui-icon-border-horizontal--two-tone')
], IconBorderHorizontal_TwoTone);
export { IconBorderHorizontal_TwoTone };
