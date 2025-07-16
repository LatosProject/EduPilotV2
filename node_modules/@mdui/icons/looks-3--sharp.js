import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLooks_3_Sharp = class IconLooks_3_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3.01v18H21V3zm-5.99 14H9v-2h4v-2h-2v-2h2V9H9V7h6.01v10z"/>');
    }
};
IconLooks_3_Sharp.styles = style;
IconLooks_3_Sharp = __decorate([
    customElement('mdui-icon-looks-3--sharp')
], IconLooks_3_Sharp);
export { IconLooks_3_Sharp };
