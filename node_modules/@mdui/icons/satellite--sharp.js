import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSatellite_Sharp = class IconSatellite_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6 3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"/>');
    }
};
IconSatellite_Sharp.styles = style;
IconSatellite_Sharp = __decorate([
    customElement('mdui-icon-satellite--sharp')
], IconSatellite_Sharp);
export { IconSatellite_Sharp };
