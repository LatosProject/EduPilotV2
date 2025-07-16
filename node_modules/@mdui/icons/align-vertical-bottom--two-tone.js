import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignVerticalBottom_TwoTone = class IconAlignVerticalBottom_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"/>');
    }
};
IconAlignVerticalBottom_TwoTone.styles = style;
IconAlignVerticalBottom_TwoTone = __decorate([
    customElement('mdui-icon-align-vertical-bottom--two-tone')
], IconAlignVerticalBottom_TwoTone);
export { IconAlignVerticalBottom_TwoTone };
