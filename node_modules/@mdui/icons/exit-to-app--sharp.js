import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconExitToApp_Sharp = class IconExitToApp_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM21 3H3v6h2V5h14v14H5v-4H3v6h18V3z"/>');
    }
};
IconExitToApp_Sharp.styles = style;
IconExitToApp_Sharp = __decorate([
    customElement('mdui-icon-exit-to-app--sharp')
], IconExitToApp_Sharp);
export { IconExitToApp_Sharp };
