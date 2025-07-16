import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconContentCopy_Outlined = class IconContentCopy_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>');
    }
};
IconContentCopy_Outlined.styles = style;
IconContentCopy_Outlined = __decorate([
    customElement('mdui-icon-content-copy--outlined')
], IconContentCopy_Outlined);
export { IconContentCopy_Outlined };
