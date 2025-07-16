import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInbox_Sharp = class IconInbox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3.01v18H21V3zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14v10z"/>');
    }
};
IconInbox_Sharp.styles = style;
IconInbox_Sharp = __decorate([
    customElement('mdui-icon-inbox--sharp')
], IconInbox_Sharp);
export { IconInbox_Sharp };
