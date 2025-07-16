import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTimer_10Select_Sharp = class IconTimer_10Select_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 8v8h-3V8h3m3-3H7v14h9V5zM1 8h2v11h3V5H1v3zm22 3h-6v5h4v1h-4v2h6v-5h-4v-1h4v-2z"/>');
    }
};
IconTimer_10Select_Sharp.styles = style;
IconTimer_10Select_Sharp = __decorate([
    customElement('mdui-icon-timer-10-select--sharp')
], IconTimer_10Select_Sharp);
export { IconTimer_10Select_Sharp };
