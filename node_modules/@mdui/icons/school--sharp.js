import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSchool_Sharp = class IconSchool_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"/>');
    }
};
IconSchool_Sharp.styles = style;
IconSchool_Sharp = __decorate([
    customElement('mdui-icon-school--sharp')
], IconSchool_Sharp);
export { IconSchool_Sharp };
