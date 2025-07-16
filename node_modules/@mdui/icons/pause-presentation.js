import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPausePresentation = class IconPausePresentation extends LitElement {
    render() {
        return svgTag('<path d="M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M9 8h2v8H9zm4 0h2v8h-2z"/>');
    }
};
IconPausePresentation.styles = style;
IconPausePresentation = __decorate([
    customElement('mdui-icon-pause-presentation')
], IconPausePresentation);
export { IconPausePresentation };
