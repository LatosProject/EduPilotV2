import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChecklist_TwoTone = class IconChecklist_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M22 7h-9v2h9V7zm0 8h-9v2h9v-2zM5.54 11 2 7.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 11zm0 8L2 15.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L5.54 19z"/>');
    }
};
IconChecklist_TwoTone.styles = style;
IconChecklist_TwoTone = __decorate([
    customElement('mdui-icon-checklist--two-tone')
], IconChecklist_TwoTone);
export { IconChecklist_TwoTone };
