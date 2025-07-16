import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLastPage = class IconLastPage extends LitElement {
    render() {
        return svgTag('<path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>');
    }
};
IconLastPage.styles = style;
IconLastPage = __decorate([
    customElement('mdui-icon-last-page')
], IconLastPage);
export { IconLastPage };
