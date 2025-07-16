import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon18UpRating = class Icon18UpRating extends LitElement {
    render() {
        return svgTag('<path d="M13 12.5h1.5V14H13zm0-2.5h1.5v1.5H13z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 12H8.5v-4.5H7V9h3v6zm6-1c0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1H15c.55 0 1 .45 1 1v4z"/>');
    }
};
Icon18UpRating.styles = style;
Icon18UpRating = __decorate([
    customElement('mdui-icon-18-up-rating')
], Icon18UpRating);
export { Icon18UpRating };
