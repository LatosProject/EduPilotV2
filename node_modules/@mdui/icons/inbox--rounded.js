import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInbox_Rounded = class IconInbox_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v9h-3.56c-.36 0-.68.19-.86.5-.52.9-1.47 1.5-2.58 1.5s-2.06-.6-2.58-1.5a1 1 0 0 0-.86-.5H5V5h14z"/>');
    }
};
IconInbox_Rounded.styles = style;
IconInbox_Rounded = __decorate([
    customElement('mdui-icon-inbox--rounded')
], IconInbox_Rounded);
export { IconInbox_Rounded };
