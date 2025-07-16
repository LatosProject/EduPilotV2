import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOndemandVideo_Outlined = class IconOndemandVideo_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>');
    }
};
IconOndemandVideo_Outlined.styles = style;
IconOndemandVideo_Outlined = __decorate([
    customElement('mdui-icon-ondemand-video--outlined')
], IconOndemandVideo_Outlined);
export { IconOndemandVideo_Outlined };
