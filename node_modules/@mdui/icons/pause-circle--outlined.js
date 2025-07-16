import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPauseCircle_Outlined = class IconPauseCircle_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"/>');
    }
};
IconPauseCircle_Outlined.styles = style;
IconPauseCircle_Outlined = __decorate([
    customElement('mdui-icon-pause-circle--outlined')
], IconPauseCircle_Outlined);
export { IconPauseCircle_Outlined };
