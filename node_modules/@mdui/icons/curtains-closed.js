import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurtainsClosed = class IconCurtainsClosed extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zM11 5h2v14h-2V5z"/>');
    }
};
IconCurtainsClosed.styles = style;
IconCurtainsClosed = __decorate([
    customElement('mdui-icon-curtains-closed')
], IconCurtainsClosed);
export { IconCurtainsClosed };
