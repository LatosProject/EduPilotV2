import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextFields = class IconTextFields extends LitElement {
    render() {
        return svgTag('<path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/>');
    }
};
IconTextFields.styles = style;
IconTextFields = __decorate([
    customElement('mdui-icon-text-fields')
], IconTextFields);
export { IconTextFields };
