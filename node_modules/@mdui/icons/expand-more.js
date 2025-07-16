import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExpandMore = class IconExpandMore extends LitElement {
    render() {
        return svgTag('<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"/>');
    }
};
IconExpandMore.styles = style;
IconExpandMore = __decorate([
    customElement('mdui-icon-expand-more')
], IconExpandMore);
export { IconExpandMore };
