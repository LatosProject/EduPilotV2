import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLayers_Rounded = class IconLayers_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78a.991.991 0 0 0-1.22 0 .997.997 0 0 0 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01a.991.991 0 0 0-1.22 0l-6.15 4.79zm.63-3.02 6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01z"/>');
    }
};
IconLayers_Rounded.styles = style;
IconLayers_Rounded = __decorate([
    customElement('mdui-icon-layers--rounded')
], IconLayers_Rounded);
export { IconLayers_Rounded };
