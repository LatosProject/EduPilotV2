import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStopCircle_Sharp = class IconStopCircle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14H8V8h8v8z"/>');
    }
};
IconStopCircle_Sharp.styles = style;
IconStopCircle_Sharp = __decorate([
    customElement('mdui-icon-stop-circle--sharp')
], IconStopCircle_Sharp);
export { IconStopCircle_Sharp };
