import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFoundation_TwoTone = class IconFoundation_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z" opacity=".3"/><path d="M19 12h3L12 3 2 12h3v3H3v2h2v3h2v-3h4v3h2v-3h4v3h2v-3h2v-2h-2v-3zM7 15v-4.81l4-3.6V15H7zm6 0V6.59l4 3.6V15h-4z"/>');
    }
};
IconFoundation_TwoTone.styles = style;
IconFoundation_TwoTone = __decorate([
    customElement('mdui-icon-foundation--two-tone')
], IconFoundation_TwoTone);
export { IconFoundation_TwoTone };
