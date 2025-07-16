import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutlinedFlag_Rounded = class IconOutlinedFlag_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m14 6-.72-1.45c-.17-.34-.52-.55-.9-.55H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5l.72 1.45a1 1 0 0 0 .89.55H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-5zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>');
    }
};
IconOutlinedFlag_Rounded.styles = style;
IconOutlinedFlag_Rounded = __decorate([
    customElement('mdui-icon-outlined-flag--rounded')
], IconOutlinedFlag_Rounded);
export { IconOutlinedFlag_Rounded };
