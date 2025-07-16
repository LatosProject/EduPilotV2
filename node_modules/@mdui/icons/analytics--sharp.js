import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAnalytics_Sharp = class IconAnalytics_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm6 14H7v-5h2v5zm4 0h-2v-3h2v3zm0-5h-2v-2h2v2zm4 5h-2V7h2v10z"/>');
    }
};
IconAnalytics_Sharp.styles = style;
IconAnalytics_Sharp = __decorate([
    customElement('mdui-icon-analytics--sharp')
], IconAnalytics_Sharp);
export { IconAnalytics_Sharp };
