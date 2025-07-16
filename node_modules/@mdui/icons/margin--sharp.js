import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMargin_Sharp = class IconMargin_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm6 10H7v-2h2v2zm0-4H7V7h2v2zm4 4h-2v-2h2v2zm0-4h-2V7h2v2zm4 4h-2v-2h2v2zm0-4h-2V7h2v2z"/>');
    }
};
IconMargin_Sharp.styles = style;
IconMargin_Sharp = __decorate([
    customElement('mdui-icon-margin--sharp')
], IconMargin_Sharp);
export { IconMargin_Sharp };
