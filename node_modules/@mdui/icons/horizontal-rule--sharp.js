import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalRule_Sharp = class IconHorizontalRule_Sharp extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M4 11h16v2H4z"/>');
    }
};
IconHorizontalRule_Sharp.styles = style;
IconHorizontalRule_Sharp = __decorate([
    customElement('mdui-icon-horizontal-rule--sharp')
], IconHorizontalRule_Sharp);
export { IconHorizontalRule_Sharp };
