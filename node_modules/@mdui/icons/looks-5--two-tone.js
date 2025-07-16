import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLooks_5_TwoTone = class IconLooks_5_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 5H5v14h14V5zm-4 4h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H9v-2h4v-2H9V7h6v2z" opacity=".3"/><path d="M5 21h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 5h14v14H5V5zm4 8h4v2H9v2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2V9h4V7H9v6z"/>');
    }
};
IconLooks_5_TwoTone.styles = style;
IconLooks_5_TwoTone = __decorate([
    customElement('mdui-icon-looks-5--two-tone')
], IconLooks_5_TwoTone);
export { IconLooks_5_TwoTone };
