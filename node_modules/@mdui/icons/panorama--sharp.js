import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPanorama_Sharp = class IconPanorama_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M23 20V4H1v16h22zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"/>');
    }
};
IconPanorama_Sharp.styles = style;
IconPanorama_Sharp = __decorate([
    customElement('mdui-icon-panorama--sharp')
], IconPanorama_Sharp);
export { IconPanorama_Sharp };
