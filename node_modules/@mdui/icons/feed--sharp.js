import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFeed_Sharp = class IconFeed_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 3H3v18h18V8l-5-5zM7 7h5v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2zm-2-4V5l4 4h-4z"/>');
    }
};
IconFeed_Sharp.styles = style;
IconFeed_Sharp = __decorate([
    customElement('mdui-icon-feed--sharp')
], IconFeed_Sharp);
export { IconFeed_Sharp };
