import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWatchLater = class IconWatchLater extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/>');
    }
};
IconWatchLater.styles = style;
IconWatchLater = __decorate([
    customElement('mdui-icon-watch-later')
], IconWatchLater);
export { IconWatchLater };
