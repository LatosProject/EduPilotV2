import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCancelPresentation_Sharp = class IconCancelPresentation_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M1 3v18h22V3H1zm20 16H3V5h18v14zM9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59z"/>');
    }
};
IconCancelPresentation_Sharp.styles = style;
IconCancelPresentation_Sharp = __decorate([
    customElement('mdui-icon-cancel-presentation--sharp')
], IconCancelPresentation_Sharp);
export { IconCancelPresentation_Sharp };
