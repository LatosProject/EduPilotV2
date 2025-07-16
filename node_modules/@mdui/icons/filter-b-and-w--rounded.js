import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterBAndW_Rounded = class IconFilterBAndW_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16-7-8v8H5l7-8V5h6c.55 0 1 .45 1 1v13z"/>');
    }
};
IconFilterBAndW_Rounded.styles = style;
IconFilterBAndW_Rounded = __decorate([
    customElement('mdui-icon-filter-b-and-w--rounded')
], IconFilterBAndW_Rounded);
export { IconFilterBAndW_Rounded };
