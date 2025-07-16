import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStayCurrentPortrait_Outlined = class IconStayCurrentPortrait_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>');
    }
};
IconStayCurrentPortrait_Outlined.styles = style;
IconStayCurrentPortrait_Outlined = __decorate([
    customElement('mdui-icon-stay-current-portrait--outlined')
], IconStayCurrentPortrait_Outlined);
export { IconStayCurrentPortrait_Outlined };
