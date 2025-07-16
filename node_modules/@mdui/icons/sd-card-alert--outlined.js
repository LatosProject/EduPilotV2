import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSdCardAlert_Outlined = class IconSdCardAlert_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V8.83L10.83 4H18v16zm-7-5h2v2h-2zm0-7h2v5h-2z"/>');
    }
};
IconSdCardAlert_Outlined.styles = style;
IconSdCardAlert_Outlined = __decorate([
    customElement('mdui-icon-sd-card-alert--outlined')
], IconSdCardAlert_Outlined);
export { IconSdCardAlert_Outlined };
