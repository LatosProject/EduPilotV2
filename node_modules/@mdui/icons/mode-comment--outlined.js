import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconModeComment_Outlined = class IconModeComment_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 17.17 18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/>');
    }
};
IconModeComment_Outlined.styles = style;
IconModeComment_Outlined = __decorate([
    customElement('mdui-icon-mode-comment--outlined')
], IconModeComment_Outlined);
export { IconModeComment_Outlined };
