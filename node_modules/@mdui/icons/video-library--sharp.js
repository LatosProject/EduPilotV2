import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoLibrary_Sharp = class IconVideoLibrary_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 6H2v16h16v-2H4V6zm18-4H6v16h16V2zM12 14.5v-9l6 4.5-6 4.5z"/>');
    }
};
IconVideoLibrary_Sharp.styles = style;
IconVideoLibrary_Sharp = __decorate([
    customElement('mdui-icon-video-library--sharp')
], IconVideoLibrary_Sharp);
export { IconVideoLibrary_Sharp };
