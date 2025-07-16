import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNetworkLocked_TwoTone = class IconNetworkLocked_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M22 16v-.5a2.5 2.5 0 0 0-5 0v.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5zM18 5.83v5.43c.47-.16.97-.26 1.5-.26.17 0 .33.03.5.05V1L1 20h13v-2H5.83L18 5.83z"/>');
    }
};
IconNetworkLocked_TwoTone.styles = style;
IconNetworkLocked_TwoTone = __decorate([
    customElement('mdui-icon-network-locked--two-tone')
], IconNetworkLocked_TwoTone);
export { IconNetworkLocked_TwoTone };
