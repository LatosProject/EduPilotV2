import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBurstMode_Rounded = class IconBurstMode_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M2 5c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm4 0c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1s-1-.45-1-1V6c0-.55.45-1 1-1zm16 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11.64 16.19l1.47-1.86c.2-.25.57-.25.78-.01l1.4 1.68 2.1-2.71c.2-.26.59-.26.79 0l2.21 2.9c.25.33.02.8-.4.8h-7.96a.492.492 0 0 1-.39-.8z"/>');
    }
};
IconBurstMode_Rounded.styles = style;
IconBurstMode_Rounded = __decorate([
    customElement('mdui-icon-burst-mode--rounded')
], IconBurstMode_Rounded);
export { IconBurstMode_Rounded };
