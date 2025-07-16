import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPausePresentation_TwoTone = class IconPausePresentation_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18V5H3v14zM13 8h2v8h-2V8zM9 8h2v8H9V8z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z"/>');
    }
};
IconPausePresentation_TwoTone.styles = style;
IconPausePresentation_TwoTone = __decorate([
    customElement('mdui-icon-pause-presentation--two-tone')
], IconPausePresentation_TwoTone);
export { IconPausePresentation_TwoTone };
