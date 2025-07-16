import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalRule_TwoTone = class IconHorizontalRule_TwoTone extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M4 11h16v2H4z"/>');
    }
};
IconHorizontalRule_TwoTone.styles = style;
IconHorizontalRule_TwoTone = __decorate([
    customElement('mdui-icon-horizontal-rule--two-tone')
], IconHorizontalRule_TwoTone);
export { IconHorizontalRule_TwoTone };
