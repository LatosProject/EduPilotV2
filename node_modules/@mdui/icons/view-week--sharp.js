import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewWeek_Sharp = class IconViewWeek_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7.33 20H2V4h5.33v16zM22 20V4h-5.33v16H22zm-7.33 0V4H9.33v16h5.34z"/>');
    }
};
IconViewWeek_Sharp.styles = style;
IconViewWeek_Sharp = __decorate([
    customElement('mdui-icon-view-week--sharp')
], IconViewWeek_Sharp);
export { IconViewWeek_Sharp };
