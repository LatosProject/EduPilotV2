import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuickreply_Outlined = class IconQuickreply_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 17.17V4h16v6h2V4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-2H5.17L4 17.17z"/><path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z"/>');
    }
};
IconQuickreply_Outlined.styles = style;
IconQuickreply_Outlined = __decorate([
    customElement('mdui-icon-quickreply--outlined')
], IconQuickreply_Outlined);
export { IconQuickreply_Outlined };
