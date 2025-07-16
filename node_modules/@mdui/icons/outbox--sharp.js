import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutbox_Sharp = class IconOutbox_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M11 14h2v-3h3l-4-4-4 4h3z"/><path d="M3 3v18h18V3H3zm16 11h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14v9z"/>');
    }
};
IconOutbox_Sharp.styles = style;
IconOutbox_Sharp = __decorate([
    customElement('mdui-icon-outbox--sharp')
], IconOutbox_Sharp);
export { IconOutbox_Sharp };
