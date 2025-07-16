import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertComment_Outlined = class IconInsertComment_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4v13.17L18.83 16H4V4h16m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 10H6v2h12v-2zm0-3H6v2h12V9zm0-3H6v2h12V6z"/>');
    }
};
IconInsertComment_Outlined.styles = style;
IconInsertComment_Outlined = __decorate([
    customElement('mdui-icon-insert-comment--outlined')
], IconInsertComment_Outlined);
export { IconInsertComment_Outlined };
