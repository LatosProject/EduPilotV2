import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterAlt_Rounded = class IconFilterAlt_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61z"/>');
    }
};
IconFilterAlt_Rounded.styles = style;
IconFilterAlt_Rounded = __decorate([
    customElement('mdui-icon-filter-alt--rounded')
], IconFilterAlt_Rounded);
export { IconFilterAlt_Rounded };
