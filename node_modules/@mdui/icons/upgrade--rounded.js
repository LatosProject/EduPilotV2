import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUpgrade_Rounded = class IconUpgrade_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16 19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1zM11 7.99V15c0 .55.45 1 1 1s1-.45 1-1V7.99h1.79c.45 0 .67-.54.35-.85l-2.79-2.78a.513.513 0 0 0-.71 0L8.86 7.14c-.32.31-.1.85.35.85H11z"/>');
    }
};
IconUpgrade_Rounded.styles = style;
IconUpgrade_Rounded = __decorate([
    customElement('mdui-icon-upgrade--rounded')
], IconUpgrade_Rounded);
export { IconUpgrade_Rounded };
