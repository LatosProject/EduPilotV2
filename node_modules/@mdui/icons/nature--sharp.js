import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNature_Sharp = class IconNature_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88z"/>');
    }
};
IconNature_Sharp.styles = style;
IconNature_Sharp = __decorate([
    customElement('mdui-icon-nature--sharp')
], IconNature_Sharp);
export { IconNature_Sharp };
