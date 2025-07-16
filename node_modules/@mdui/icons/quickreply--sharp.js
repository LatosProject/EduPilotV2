import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuickreply_Sharp = class IconQuickreply_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20l4-4h9v-8h7z"/><path d="M22.5 16h-2.2l1.7-4h-5v6h2v5z"/>');
    }
};
IconQuickreply_Sharp.styles = style;
IconQuickreply_Sharp = __decorate([
    customElement('mdui-icon-quickreply--sharp')
], IconQuickreply_Sharp);
export { IconQuickreply_Sharp };
