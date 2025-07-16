import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEventAvailable_Sharp = class IconEventAvailable_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM21 3h-3V1h-2v2H8V1H6v2H3v18h18V3zm-2 16H5V8h14v11z"/>');
    }
};
IconEventAvailable_Sharp.styles = style;
IconEventAvailable_Sharp = __decorate([
    customElement('mdui-icon-event-available--sharp')
], IconEventAvailable_Sharp);
export { IconEventAvailable_Sharp };
