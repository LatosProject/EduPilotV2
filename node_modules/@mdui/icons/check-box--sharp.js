import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCheckBox_Sharp = class IconCheckBox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 3H3v18h18V3zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>');
    }
};
IconCheckBox_Sharp.styles = style;
IconCheckBox_Sharp = __decorate([
    customElement('mdui-icon-check-box--sharp')
], IconCheckBox_Sharp);
export { IconCheckBox_Sharp };
