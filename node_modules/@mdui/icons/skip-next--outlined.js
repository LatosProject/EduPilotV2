import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSkipNext_Outlined = class IconSkipNext_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m6 18 8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"/>');
    }
};
IconSkipNext_Outlined.styles = style;
IconSkipNext_Outlined = __decorate([
    customElement('mdui-icon-skip-next--outlined')
], IconSkipNext_Outlined);
export { IconSkipNext_Outlined };
