import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertComment_Sharp = class IconInsertComment_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v16h16l4 4V2zm-4 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>');
    }
};
IconInsertComment_Sharp.styles = style;
IconInsertComment_Sharp = __decorate([
    customElement('mdui-icon-insert-comment--sharp')
], IconInsertComment_Sharp);
export { IconInsertComment_Sharp };
