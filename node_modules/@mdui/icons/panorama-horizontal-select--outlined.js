import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPanoramaHorizontalSelect_Outlined = class IconPanoramaHorizontalSelect_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 5.5c-3.89 0-6.95-.84-8.69-1.43A.993.993 0 0 0 2 5.02V19c0 .68.66 1.17 1.31.95C5.36 19.26 8.1 18.5 12 18.5c3.87 0 6.66.76 8.69 1.45A.999.999 0 0 0 22 19V5c0-.68-.66-1.17-1.31-.95-2.03.68-4.83 1.45-8.69 1.45z"/>');
    }
};
IconPanoramaHorizontalSelect_Outlined.styles = style;
IconPanoramaHorizontalSelect_Outlined = __decorate([
    customElement('mdui-icon-panorama-horizontal-select--outlined')
], IconPanoramaHorizontalSelect_Outlined);
export { IconPanoramaHorizontalSelect_Outlined };
