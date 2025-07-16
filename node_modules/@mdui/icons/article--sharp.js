import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArticle_Sharp = class IconArticle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm11 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>');
    }
};
IconArticle_Sharp.styles = style;
IconArticle_Sharp = __decorate([
    customElement('mdui-icon-article--sharp')
], IconArticle_Sharp);
export { IconArticle_Sharp };
