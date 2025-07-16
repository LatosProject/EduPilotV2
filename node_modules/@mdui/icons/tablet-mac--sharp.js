import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTabletMac_Sharp = class IconTabletMac_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 0H2v24h19V0zm-9.5 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/>');
    }
};
IconTabletMac_Sharp.styles = style;
IconTabletMac_Sharp = __decorate([
    customElement('mdui-icon-tablet-mac--sharp')
], IconTabletMac_Sharp);
export { IconTabletMac_Sharp };
