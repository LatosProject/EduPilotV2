import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutput_TwoTone = class IconOutput_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m17 17 5-5-5-5-1.41 1.41L18.17 11H9v2h9.17l-2.58 2.59z"/><path d="M19 19H5V5h14v2h2V5a2 2 0 0 0-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-2h-2v2z"/>');
    }
};
IconOutput_TwoTone.styles = style;
IconOutput_TwoTone = __decorate([
    customElement('mdui-icon-output--two-tone')
], IconOutput_TwoTone);
export { IconOutput_TwoTone };
