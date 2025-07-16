import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalRule_Outlined = class IconHorizontalRule_Outlined extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M4 11h16v2H4z"/>');
    }
};
IconHorizontalRule_Outlined.styles = style;
IconHorizontalRule_Outlined = __decorate([
    customElement('mdui-icon-horizontal-rule--outlined')
], IconHorizontalRule_Outlined);
export { IconHorizontalRule_Outlined };
