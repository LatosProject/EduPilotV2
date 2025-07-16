import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoLabel_TwoTone = class IconVideoLabel_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 5h18v11H3z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"/>');
    }
};
IconVideoLabel_TwoTone.styles = style;
IconVideoLabel_TwoTone = __decorate([
    customElement('mdui-icon-video-label--two-tone')
], IconVideoLabel_TwoTone);
export { IconVideoLabel_TwoTone };
