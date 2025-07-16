import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurtainsClosed_TwoTone = class IconCurtainsClosed_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M6 5h3v14H6zm9 0h3v14h-3z" opacity=".3"/><path d="M20 19V3H4v16H2v2h20v-2h-2zM9 19H6V5h3v14zm4 0h-2V5h2v14zm5 0h-3V5h3v14z"/>');
    }
};
IconCurtainsClosed_TwoTone.styles = style;
IconCurtainsClosed_TwoTone = __decorate([
    customElement('mdui-icon-curtains-closed--two-tone')
], IconCurtainsClosed_TwoTone);
export { IconCurtainsClosed_TwoTone };
