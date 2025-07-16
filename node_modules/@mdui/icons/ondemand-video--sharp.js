import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOndemandVideo_Sharp = class IconOndemandVideo_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v16h7v2h8v-2h6.99L23 3zm-2 14H3V5h18v12zm-5-6-7 4V7l7 4z"/>');
    }
};
IconOndemandVideo_Sharp.styles = style;
IconOndemandVideo_Sharp = __decorate([
    customElement('mdui-icon-ondemand-video--sharp')
], IconOndemandVideo_Sharp);
export { IconOndemandVideo_Sharp };
