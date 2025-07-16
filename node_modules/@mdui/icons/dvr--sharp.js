import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDvr_Sharp = class IconDvr_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 3H1v16h7v2h8v-2h7V3zm-2 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z"/>');
    }
};
IconDvr_Sharp.styles = style;
IconDvr_Sharp = __decorate([
    customElement('mdui-icon-dvr--sharp')
], IconDvr_Sharp);
export { IconDvr_Sharp };
