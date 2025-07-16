import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPauseCircle_Sharp = class IconPauseCircle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>');
    }
};
IconPauseCircle_Sharp.styles = style;
IconPauseCircle_Sharp = __decorate([
    customElement('mdui-icon-pause-circle--sharp')
], IconPauseCircle_Sharp);
export { IconPauseCircle_Sharp };
