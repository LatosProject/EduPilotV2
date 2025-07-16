import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUnfoldMore = class IconUnfoldMore extends LitElement {
    render() {
        return svgTag('<path d="M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>');
    }
};
IconUnfoldMore.styles = style;
IconUnfoldMore = __decorate([
    customElement('mdui-icon-unfold-more')
], IconUnfoldMore);
export { IconUnfoldMore };
