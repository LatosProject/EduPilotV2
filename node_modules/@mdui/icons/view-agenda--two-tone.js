import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewAgenda_TwoTone = class IconViewAgenda_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5h14v4H5zm0 10h14v4H5z" opacity=".3"/><path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zm0 6H5v-4h14v4zm0-16H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6H5V5h14v4z"/>');
    }
};
IconViewAgenda_TwoTone.styles = style;
IconViewAgenda_TwoTone = __decorate([
    customElement('mdui-icon-view-agenda--two-tone')
], IconViewAgenda_TwoTone);
export { IconViewAgenda_TwoTone };
