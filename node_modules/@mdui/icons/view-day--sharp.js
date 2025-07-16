import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewDay_Sharp = class IconViewDay_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M2 21h19v-3H2v3zM21 8H2v8h19V8zM2 3v3h19V3H2z"/>');
    }
};
IconViewDay_Sharp.styles = style;
IconViewDay_Sharp = __decorate([
    customElement('mdui-icon-view-day--sharp')
], IconViewDay_Sharp);
export { IconViewDay_Sharp };
