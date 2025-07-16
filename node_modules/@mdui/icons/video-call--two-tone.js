import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoCall_TwoTone = class IconVideoCall_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 16h10V8H5v8zm2-5h2V9h2v2h2v2h-2v2H9v-2H7v-2z" opacity=".3"/><path d="M17 7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7zm-2 9H5V8h10v8zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z"/>');
    }
};
IconVideoCall_TwoTone.styles = style;
IconVideoCall_TwoTone = __decorate([
    customElement('mdui-icon-video-call--two-tone')
], IconVideoCall_TwoTone);
export { IconVideoCall_TwoTone };
