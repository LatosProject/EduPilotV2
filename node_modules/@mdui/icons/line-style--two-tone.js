import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLineStyle_TwoTone = class IconLineStyle_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"/>');
    }
};
IconLineStyle_TwoTone.styles = style;
IconLineStyle_TwoTone = __decorate([
    customElement('mdui-icon-line-style--two-tone')
], IconLineStyle_TwoTone);
export { IconLineStyle_TwoTone };
