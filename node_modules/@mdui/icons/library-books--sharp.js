import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLibraryBooks_Sharp = class IconLibraryBooks_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zm-3 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>');
    }
};
IconLibraryBooks_Sharp.styles = style;
IconLibraryBooks_Sharp = __decorate([
    customElement('mdui-icon-library-books--sharp')
], IconLibraryBooks_Sharp);
export { IconLibraryBooks_Sharp };
