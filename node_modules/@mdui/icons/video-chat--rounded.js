import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoChat_Rounded = class IconVideoChat_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 19.58c0 .89 1.08 1.34 1.71.71L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.85 10.15L15 11.01V13c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v1.99l1.15-1.14c.31-.32.85-.09.85.35v3.59c0 .45-.54.68-.85.36z"/>');
    }
};
IconVideoChat_Rounded.styles = style;
IconVideoChat_Rounded = __decorate([
    customElement('mdui-icon-video-chat--rounded')
], IconVideoChat_Rounded);
export { IconVideoChat_Rounded };
