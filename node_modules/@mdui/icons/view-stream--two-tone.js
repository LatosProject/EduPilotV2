import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewStream_TwoTone = class IconViewStream_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 17H5v-4h14v4zM5 11V7h14v4H5z" opacity=".3"/><path d="M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 10H5v-4h14v4zM5 11V7h14v4H5z"/>');
    }
};
IconViewStream_TwoTone.styles = style;
IconViewStream_TwoTone = __decorate([
    customElement('mdui-icon-view-stream--two-tone')
], IconViewStream_TwoTone);
export { IconViewStream_TwoTone };
