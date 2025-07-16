import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSkipPrevious = class IconSkipPrevious extends LitElement {
    render() {
        return svgTag('<path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>');
    }
};
IconSkipPrevious.styles = style;
IconSkipPrevious = __decorate([
    customElement('mdui-icon-skip-previous')
], IconSkipPrevious);
export { IconSkipPrevious };
