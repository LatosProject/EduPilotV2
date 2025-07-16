import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForum_Sharp = class IconForum_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6h-3v9H6v3h12l4 4V6zm-5 7V2H2v15l4-4h11z"/>');
    }
};
IconForum_Sharp.styles = style;
IconForum_Sharp = __decorate([
    customElement('mdui-icon-forum--sharp')
], IconForum_Sharp);
export { IconForum_Sharp };
