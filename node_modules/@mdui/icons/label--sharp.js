import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLabel_Sharp = class IconLabel_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17.03 5 3 5.01v13.98l14.03.01L22 12l-4.97-7z"/>');
    }
};
IconLabel_Sharp.styles = style;
IconLabel_Sharp = __decorate([
    customElement('mdui-icon-label--sharp')
], IconLabel_Sharp);
export { IconLabel_Sharp };
