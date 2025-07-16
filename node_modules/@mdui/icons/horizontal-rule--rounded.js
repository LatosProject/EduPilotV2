import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHorizontalRule_Rounded = class IconHorizontalRule_Rounded extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M19 13H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
    }
};
IconHorizontalRule_Rounded.styles = style;
IconHorizontalRule_Rounded = __decorate([
    customElement('mdui-icon-horizontal-rule--rounded')
], IconHorizontalRule_Rounded);
export { IconHorizontalRule_Rounded };
