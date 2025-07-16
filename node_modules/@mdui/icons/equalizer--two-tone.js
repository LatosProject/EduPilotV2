import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEqualizer_TwoTone = class IconEqualizer_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z"/>');
    }
};
IconEqualizer_TwoTone.styles = style;
IconEqualizer_TwoTone = __decorate([
    customElement('mdui-icon-equalizer--two-tone')
], IconEqualizer_TwoTone);
export { IconEqualizer_TwoTone };
