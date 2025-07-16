import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconModeComment_Rounded = class IconModeComment_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4z"/>');
    }
};
IconModeComment_Rounded.styles = style;
IconModeComment_Rounded = __decorate([
    customElement('mdui-icon-mode-comment--rounded')
], IconModeComment_Rounded);
export { IconModeComment_Rounded };
