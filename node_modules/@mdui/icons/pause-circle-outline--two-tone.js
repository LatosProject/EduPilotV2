import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPauseCircleOutline_TwoTone = class IconPauseCircleOutline_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13 8h2v8h-2zM9 8h2v8H9zm3 14c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8z"/>');
    }
};
IconPauseCircleOutline_TwoTone.styles = style;
IconPauseCircleOutline_TwoTone = __decorate([
    customElement('mdui-icon-pause-circle-outline--two-tone')
], IconPauseCircleOutline_TwoTone);
export { IconPauseCircleOutline_TwoTone };
