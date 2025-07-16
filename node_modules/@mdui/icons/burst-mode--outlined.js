import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBurstMode_Outlined = class IconBurstMode_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M1 5h2v14H1zm4 0h2v14H5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H11V7h10v10zm-3.57-4.38-2 2.57L14 13.47l-2 2.52h8z"/>');
    }
};
IconBurstMode_Outlined.styles = style;
IconBurstMode_Outlined = __decorate([
    customElement('mdui-icon-burst-mode--outlined')
], IconBurstMode_Outlined);
export { IconBurstMode_Outlined };
