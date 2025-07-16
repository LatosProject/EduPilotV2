import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconForum_TwoTone = class IconForum_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 11V4H4v8.17L5.17 11H6z" opacity=".3"/><path d="M16 13c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zm-12-.83V4h11v7H5.17L4 12.17zM22 7c0-.55-.45-1-1-1h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7z"/>');
    }
};
IconForum_TwoTone.styles = style;
IconForum_TwoTone = __decorate([
    customElement('mdui-icon-forum--two-tone')
], IconForum_TwoTone);
export { IconForum_TwoTone };
