import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPausePresentation_Sharp = class IconPausePresentation_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M1 3v18h22V3H1zm20 16H3V5h18v14zM9 8h2v8H9zm4 0h2v8h-2z"/>');
    }
};
IconPausePresentation_Sharp.styles = style;
IconPausePresentation_Sharp = __decorate([
    customElement('mdui-icon-pause-presentation--sharp')
], IconPausePresentation_Sharp);
export { IconPausePresentation_Sharp };
