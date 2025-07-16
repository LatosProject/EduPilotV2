import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSkipNext = class IconSkipNext extends LitElement {
    render() {
        return svgTag('<path d="m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"/>');
    }
};
IconSkipNext.styles = style;
IconSkipNext = __decorate([
    customElement('mdui-icon-skip-next')
], IconSkipNext);
export { IconSkipNext };
