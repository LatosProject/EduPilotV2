import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAspectRatio_Sharp = class IconAspectRatio_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm16-6H1v18h22V3zm-2 16.01H3V4.99h18v14.02z"/>');
    }
};
IconAspectRatio_Sharp.styles = style;
IconAspectRatio_Sharp = __decorate([
    customElement('mdui-icon-aspect-ratio--sharp')
], IconAspectRatio_Sharp);
export { IconAspectRatio_Sharp };
