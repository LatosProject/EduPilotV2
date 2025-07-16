import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoFile_Sharp = class IconVideoFile_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 2H4v20h16V8l-6-6zm-1 7V3.5L18.5 9H13zm1 5 2-1.06v4.12L14 16v2H8v-6h6v2z"/>');
    }
};
IconVideoFile_Sharp.styles = style;
IconVideoFile_Sharp = __decorate([
    customElement('mdui-icon-video-file--sharp')
], IconVideoFile_Sharp);
export { IconVideoFile_Sharp };
