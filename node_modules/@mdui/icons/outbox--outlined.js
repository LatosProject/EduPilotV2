import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutbox_Outlined = class IconOutbox_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11 9.83V14h2V9.83l1.59 1.58L16 10l-4-4-4 4 1.41 1.41z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H19v3zm0-5h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14v9z"/>');
    }
};
IconOutbox_Outlined.styles = style;
IconOutbox_Outlined = __decorate([
    customElement('mdui-icon-outbox--outlined')
], IconOutbox_Outlined);
export { IconOutbox_Outlined };
