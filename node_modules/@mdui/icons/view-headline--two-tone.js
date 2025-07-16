import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewHeadline_TwoTone = class IconViewHeadline_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>');
    }
};
IconViewHeadline_TwoTone.styles = style;
IconViewHeadline_TwoTone = __decorate([
    customElement('mdui-icon-view-headline--two-tone')
], IconViewHeadline_TwoTone);
export { IconViewHeadline_TwoTone };
