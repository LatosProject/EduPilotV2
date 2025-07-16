import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIndeterminateCheckBox_TwoTone = class IconIndeterminateCheckBox_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zm2-8h10v2H7v-2z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 11h10v2H7z"/>');
    }
};
IconIndeterminateCheckBox_TwoTone.styles = style;
IconIndeterminateCheckBox_TwoTone = __decorate([
    customElement('mdui-icon-indeterminate-check-box--two-tone')
], IconIndeterminateCheckBox_TwoTone);
export { IconIndeterminateCheckBox_TwoTone };
