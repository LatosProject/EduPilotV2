import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScreenshot_Outlined = class IconScreenshot_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1zM9.5 8.5H12V7H8v4h1.5V8.5zM12 17h4v-4h-1.5v2.5H12V17z"/>');
    }
};
IconScreenshot_Outlined.styles = style;
IconScreenshot_Outlined = __decorate([
    customElement('mdui-icon-screenshot--outlined')
], IconScreenshot_Outlined);
export { IconScreenshot_Outlined };
