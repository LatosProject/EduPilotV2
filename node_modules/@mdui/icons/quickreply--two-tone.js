import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuickreply_TwoTone = class IconQuickreply_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 4v13.17L5.17 16H15v-6h5V4z" opacity=".3"/><path d="M5.17 16 4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17z"/><path d="m19 23 3.5-7h-2.2l1.7-4h-5v6h2z"/>');
    }
};
IconQuickreply_TwoTone.styles = style;
IconQuickreply_TwoTone = __decorate([
    customElement('mdui-icon-quickreply--two-tone')
], IconQuickreply_TwoTone);
export { IconQuickreply_TwoTone };
