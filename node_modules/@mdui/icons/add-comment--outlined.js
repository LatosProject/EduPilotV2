import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddComment_Outlined = class IconAddComment_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-2 13.17L18.83 16H4V4h16v13.17zM13 5h-2v4H7v2h4v4h2v-4h4V9h-4z"/>');
    }
};
IconAddComment_Outlined.styles = style;
IconAddComment_Outlined = __decorate([
    customElement('mdui-icon-add-comment--outlined')
], IconAddComment_Outlined);
export { IconAddComment_Outlined };
