import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconComment_Sharp = class IconComment_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21.99 2H2v16h16l4 4-.01-20zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>');
    }
};
IconComment_Sharp.styles = style;
IconComment_Sharp = __decorate([
    customElement('mdui-icon-comment--sharp')
], IconComment_Sharp);
export { IconComment_Sharp };
