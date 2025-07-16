import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDifference_Sharp = class IconDifference_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18 23H2V7h2v14h14v2zM15 1H6.01L6 19h15V7l-6-6zm1.5 14h-6v-2h6v2zm0-6h-2v2h-2V9h-2V7h2V5h2v2h2v2z"/>');
    }
};
IconDifference_Sharp.styles = style;
IconDifference_Sharp = __decorate([
    customElement('mdui-icon-difference--sharp')
], IconDifference_Sharp);
export { IconDifference_Sharp };
