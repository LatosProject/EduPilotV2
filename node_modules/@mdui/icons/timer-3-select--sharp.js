import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTimer_3Select_Sharp = class IconTimer_3Select_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 11v2h-4v1h4v5h-6v-2h4v-1h-4v-5h6zM4 5v3h6v2.5H4v3h6V16H4v3h9V5H4z"/>');
    }
};
IconTimer_3Select_Sharp.styles = style;
IconTimer_3Select_Sharp = __decorate([
    customElement('mdui-icon-timer-3-select--sharp')
], IconTimer_3Select_Sharp);
export { IconTimer_3Select_Sharp };
