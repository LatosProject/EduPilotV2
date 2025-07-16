import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBorderInner_TwoTone = class IconBorderInner_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 15h2v2H3zM3 3h2v2H3zm0 16h2v2H3zm8 2h2v-8h8v-2h-8V3h-2v8H3v2h8zm-4-2h2v2H7zm12-4h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM3 7h2v2H3zm16 0h2v2h-2zM7 3h2v2H7zm8 0h2v2h-2zm4 0h2v2h-2z"/>');
    }
};
IconBorderInner_TwoTone.styles = style;
IconBorderInner_TwoTone = __decorate([
    customElement('mdui-icon-border-inner--two-tone')
], IconBorderInner_TwoTone);
export { IconBorderInner_TwoTone };
