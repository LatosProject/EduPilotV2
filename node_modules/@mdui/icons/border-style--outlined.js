import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderStyle_Outlined = class IconBorderStyle_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"/>');
    }
};
IconBorderStyle_Outlined.styles = style;
IconBorderStyle_Outlined = __decorate([
    customElement('mdui-icon-border-style--outlined')
], IconBorderStyle_Outlined);
export { IconBorderStyle_Outlined };
