import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGite_Rounded = class IconGite_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m21.41 9.41-2.83-2.83c-.37-.37-.88-.58-1.41-.58H9V5c0-.55-.45-1-1-1s-1 .45-1 1v1h-.17c-.53 0-1.04.21-1.42.59L2.59 9.41c-.38.38-.59.89-.59 1.42V17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6.17c0-.53-.21-1.04-.59-1.42zM14 17H4v-5h10v5zm6 0h-4v-6.17l2-2 2 2V17z"/>');
    }
};
IconGite_Rounded.styles = style;
IconGite_Rounded = __decorate([
    customElement('mdui-icon-gite--rounded')
], IconGite_Rounded);
export { IconGite_Rounded };
