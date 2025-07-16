import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNotes_Sharp = class IconNotes_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"/>');
    }
};
IconNotes_Sharp.styles = style;
IconNotes_Sharp = __decorate([
    customElement('mdui-icon-notes--sharp')
], IconNotes_Sharp);
export { IconNotes_Sharp };
