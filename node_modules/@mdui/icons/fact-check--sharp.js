import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFactCheck_Sharp = class IconFactCheck_Sharp extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M2 3v18h20V3H2zm8 14H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"/>');
    }
};
IconFactCheck_Sharp.styles = style;
IconFactCheck_Sharp = __decorate([
    customElement('mdui-icon-fact-check--sharp')
], IconFactCheck_Sharp);
export { IconFactCheck_Sharp };
