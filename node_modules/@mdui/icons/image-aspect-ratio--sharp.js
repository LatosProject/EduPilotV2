import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconImageAspectRatio_Sharp = class IconImageAspectRatio_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm10-6H2v16h20V4zm-2 14H4V6h16v12z"/>');
    }
};
IconImageAspectRatio_Sharp.styles = style;
IconImageAspectRatio_Sharp = __decorate([
    customElement('mdui-icon-image-aspect-ratio--sharp')
], IconImageAspectRatio_Sharp);
export { IconImageAspectRatio_Sharp };
