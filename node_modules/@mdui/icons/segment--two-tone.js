import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSegment_TwoTone = class IconSegment_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"/>');
    }
};
IconSegment_TwoTone.styles = style;
IconSegment_TwoTone = __decorate([
    customElement('mdui-icon-segment--two-tone')
], IconSegment_TwoTone);
export { IconSegment_TwoTone };
