import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSegment_Sharp = class IconSegment_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"/>');
    }
};
IconSegment_Sharp.styles = style;
IconSegment_Sharp = __decorate([
    customElement('mdui-icon-segment--sharp')
], IconSegment_Sharp);
export { IconSegment_Sharp };
