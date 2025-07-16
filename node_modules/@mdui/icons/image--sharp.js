import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconImage_Sharp = class IconImage_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 21V3H3v18h18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>');
    }
};
IconImage_Sharp.styles = style;
IconImage_Sharp = __decorate([
    customElement('mdui-icon-image--sharp')
], IconImage_Sharp);
export { IconImage_Sharp };
