import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArchive_Sharp = class IconArchive_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M18.71 3H5.29L3 5.79V21h18V5.79L18.71 3zM12 17.5 6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/>');
    }
};
IconArchive_Sharp.styles = style;
IconArchive_Sharp = __decorate([
    customElement('mdui-icon-archive--sharp')
], IconArchive_Sharp);
export { IconArchive_Sharp };
