import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignTop_Rounded = class IconVerticalAlignTop_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M9.21 11H11v9c0 .55.45 1 1 1s1-.45 1-1v-9h1.79c.45 0 .67-.54.35-.85l-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79a.5.5 0 0 0 .36.85zM4 4c0 .55.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1z"/>');
    }
};
IconVerticalAlignTop_Rounded.styles = style;
IconVerticalAlignTop_Rounded = __decorate([
    customElement('mdui-icon-vertical-align-top--rounded')
], IconVerticalAlignTop_Rounded);
export { IconVerticalAlignTop_Rounded };
