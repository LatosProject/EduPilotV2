import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEqualizer = class IconEqualizer extends LitElement {
    render() {
        return svgTag('<path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/>');
    }
};
IconEqualizer.styles = style;
IconEqualizer = __decorate([
    customElement('mdui-icon-equalizer')
], IconEqualizer);
export { IconEqualizer };
