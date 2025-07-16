import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuickreply = class IconQuickreply extends LitElement {
    render() {
        return svgTag('<path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-8h7V4z"/><path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z"/>');
    }
};
IconQuickreply.styles = style;
IconQuickreply = __decorate([
    customElement('mdui-icon-quickreply')
], IconQuickreply);
export { IconQuickreply };
