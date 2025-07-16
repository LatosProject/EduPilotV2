import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddComment_Sharp = class IconAddComment_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v16h16l4 4V2zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4v2z"/>');
    }
};
IconAddComment_Sharp.styles = style;
IconAddComment_Sharp = __decorate([
    customElement('mdui-icon-add-comment--sharp')
], IconAddComment_Sharp);
export { IconAddComment_Sharp };
