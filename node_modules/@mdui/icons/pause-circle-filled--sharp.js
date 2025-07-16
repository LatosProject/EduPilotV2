import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPauseCircleFilled_Sharp = class IconPauseCircleFilled_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>');
    }
};
IconPauseCircleFilled_Sharp.styles = style;
IconPauseCircleFilled_Sharp = __decorate([
    customElement('mdui-icon-pause-circle-filled--sharp')
], IconPauseCircleFilled_Sharp);
export { IconPauseCircleFilled_Sharp };
