import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconImageAspectRatio = class IconImageAspectRatio extends LitElement {
    render() {
        return svgTag('<path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>');
    }
};
IconImageAspectRatio.styles = style;
IconImageAspectRatio = __decorate([
    customElement('mdui-icon-image-aspect-ratio')
], IconImageAspectRatio);
export { IconImageAspectRatio };
