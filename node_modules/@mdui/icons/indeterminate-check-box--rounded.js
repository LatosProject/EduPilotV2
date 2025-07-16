import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIndeterminateCheckBox_Rounded = class IconIndeterminateCheckBox_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 10H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"/>');
    }
};
IconIndeterminateCheckBox_Rounded.styles = style;
IconIndeterminateCheckBox_Rounded = __decorate([
    customElement('mdui-icon-indeterminate-check-box--rounded')
], IconIndeterminateCheckBox_Rounded);
export { IconIndeterminateCheckBox_Rounded };
