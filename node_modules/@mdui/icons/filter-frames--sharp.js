import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterFrames_Sharp = class IconFilterFrames_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 4h-6l-4-4-4 4H2v18h20V4zm-2 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"/>');
    }
};
IconFilterFrames_Sharp.styles = style;
IconFilterFrames_Sharp = __decorate([
    customElement('mdui-icon-filter-frames--sharp')
], IconFilterFrames_Sharp);
export { IconFilterFrames_Sharp };
