import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconContentCopy_Sharp = class IconContentCopy_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 1H2v16h2V3h12V1zm5 4H6v18h15V5zm-2 16H8V7h11v14z"/>');
    }
};
IconContentCopy_Sharp.styles = style;
IconContentCopy_Sharp = __decorate([
    customElement('mdui-icon-content-copy--sharp')
], IconContentCopy_Sharp);
export { IconContentCopy_Sharp };
