import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSquareFoot_TwoTone = class IconSquareFoot_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 17h5.76L7 11.24z" opacity=".3"/><path d="m17.66 17.66-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L9.7 9.7l-1.06 1.06-.71-.71 1.06-1.06-1.94-1.94-1.06 1.06-.71-.71 1.06-1.06L4 4v14c0 1.1.9 2 2 2h14l-2.34-2.34zM7 17v-5.76L12.76 17H7z"/>');
    }
};
IconSquareFoot_TwoTone.styles = style;
IconSquareFoot_TwoTone = __decorate([
    customElement('mdui-icon-square-foot--two-tone')
], IconSquareFoot_TwoTone);
export { IconSquareFoot_TwoTone };
