import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAllInbox_Sharp = class IconAllInbox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v11h18V3zm-2 6h-4c0 1.62-1.38 3-3 3s-3-1.38-3-3H5V5h14v4zm-4 7h6v5H3v-5h6c0 1.66 1.34 3 3 3s3-1.34 3-3z"/>');
    }
};
IconAllInbox_Sharp.styles = style;
IconAllInbox_Sharp = __decorate([
    customElement('mdui-icon-all-inbox--sharp')
], IconAllInbox_Sharp);
export { IconAllInbox_Sharp };
