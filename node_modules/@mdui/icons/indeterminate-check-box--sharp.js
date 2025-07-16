import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIndeterminateCheckBox_Sharp = class IconIndeterminateCheckBox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zm-4 10H7v-2h10v2z"/>');
    }
};
IconIndeterminateCheckBox_Sharp.styles = style;
IconIndeterminateCheckBox_Sharp = __decorate([
    customElement('mdui-icon-indeterminate-check-box--sharp')
], IconIndeterminateCheckBox_Sharp);
export { IconIndeterminateCheckBox_Sharp };
