import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurtainsClosed_Rounded = class IconCurtainsClosed_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 19V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v14H3c-.55 0-1 .45-1 1s.45 1 1 1h18c.55 0 1-.45 1-1s-.45-1-1-1h-1zM11 5h2v14h-2V5z"/>');
    }
};
IconCurtainsClosed_Rounded.styles = style;
IconCurtainsClosed_Rounded = __decorate([
    customElement('mdui-icon-curtains-closed--rounded')
], IconCurtainsClosed_Rounded);
export { IconCurtainsClosed_Rounded };
