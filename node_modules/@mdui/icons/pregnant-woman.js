import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPregnantWoman = class IconPregnantWoman extends LitElement {
    render() {
        return svgTag('<path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9a3.285 3.285 0 0 0-2-3c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"/>');
    }
};
IconPregnantWoman.styles = style;
IconPregnantWoman = __decorate([
    customElement('mdui-icon-pregnant-woman')
], IconPregnantWoman);
export { IconPregnantWoman };
