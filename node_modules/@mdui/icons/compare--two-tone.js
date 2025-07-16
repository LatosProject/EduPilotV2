import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompare_TwoTone = class IconCompare_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 5h-5v7l5 6zm-9 13v-6l-5 6z" opacity=".3"/><path d="M19 3h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-2h-2v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1zm-2 17H5l5-6v6z"/>');
    }
};
IconCompare_TwoTone.styles = style;
IconCompare_TwoTone = __decorate([
    customElement('mdui-icon-compare--two-tone')
], IconCompare_TwoTone);
export { IconCompare_TwoTone };
