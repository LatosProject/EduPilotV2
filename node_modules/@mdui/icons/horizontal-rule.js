import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalRule = class IconHorizontalRule extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M4 11h16v2H4z"/>');
    }
};
IconHorizontalRule.styles = style;
IconHorizontalRule = __decorate([
    customElement('mdui-icon-horizontal-rule')
], IconHorizontalRule);
export { IconHorizontalRule };
