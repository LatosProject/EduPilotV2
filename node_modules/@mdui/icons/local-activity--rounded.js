import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalActivity_Rounded = class IconLocalActivity_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 12c0-.76.43-1.42 1.06-1.76.6-.33.94-1.01.94-1.7V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.89-1.99 1.99v2.55c0 .69.33 1.37.94 1.69C3.58 10.58 4 11.24 4 12s-.43 1.43-1.06 1.76c-.6.33-.94 1.01-.94 1.7V18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2.54c0-.69-.34-1.37-.94-1.7-.63-.34-1.06-1-1.06-1.76zm-5.5 4.1L12 14.5l-2.5 1.61c-.38.24-.87-.11-.75-.55l.75-2.88-2.3-1.88a.503.503 0 0 1 .29-.89l2.96-.17 1.08-2.75c.17-.42.77-.42.93 0l1.08 2.76 2.96.17c.45.03.64.6.29.89l-2.3 1.88.76 2.86c.12.45-.37.8-.75.55z"/>');
    }
};
IconLocalActivity_Rounded.styles = style;
IconLocalActivity_Rounded = __decorate([
    customElement('mdui-icon-local-activity--rounded')
], IconLocalActivity_Rounded);
export { IconLocalActivity_Rounded };
