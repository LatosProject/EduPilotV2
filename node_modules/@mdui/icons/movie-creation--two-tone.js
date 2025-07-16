import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMovieCreation_TwoTone = class IconMovieCreation_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 6.47V18h16v-8H5.76z" opacity=".3"/><path d="m18 4 2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4zm2 14H4V6.47L5.76 10H20v8z"/>');
    }
};
IconMovieCreation_TwoTone.styles = style;
IconMovieCreation_TwoTone = __decorate([
    customElement('mdui-icon-movie-creation--two-tone')
], IconMovieCreation_TwoTone);
export { IconMovieCreation_TwoTone };
