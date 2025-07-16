import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon123_Sharp = class Icon123_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 15H5.5v-4.5H4V9h3v6zm6.5-1.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5v-1.5zm6 1.5V9H15v1.5h3v1h-2v1h2v1h-3V15h4.5z"/>');
    }
};
Icon123_Sharp.styles = style;
Icon123_Sharp = __decorate([
    customElement('mdui-icon-123--sharp')
], Icon123_Sharp);
export { Icon123_Sharp };
