import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSimCard_Sharp = class IconSimCard_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19.99 2H10L4 8v14h16l-.01-20zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"/>');
    }
};
IconSimCard_Sharp.styles = style;
IconSimCard_Sharp = __decorate([
    customElement('mdui-icon-sim-card--sharp')
], IconSimCard_Sharp);
export { IconSimCard_Sharp };
