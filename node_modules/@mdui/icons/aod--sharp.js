import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAod_Sharp = class IconAod_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 1H5v22h14V1zm-2 17H7V6h10v12zm-9-8h8v1.5H8V10zm1 3h6v1.5H9V13z"/>');
    }
};
IconAod_Sharp.styles = style;
IconAod_Sharp = __decorate([
    customElement('mdui-icon-aod--sharp')
], IconAod_Sharp);
export { IconAod_Sharp };
