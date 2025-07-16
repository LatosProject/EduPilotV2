import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHome_TwoTone = class IconHome_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3zm5 15h-2v-6H9v6H7v-7.81l5-4.5 5 4.5V18z"/><path d="M7 10.19V18h2v-6h6v6h2v-7.81l-5-4.5z" opacity=".3"/>');
    }
};
IconHome_TwoTone.styles = style;
IconHome_TwoTone = __decorate([
    customElement('mdui-icon-home--two-tone')
], IconHome_TwoTone);
export { IconHome_TwoTone };
