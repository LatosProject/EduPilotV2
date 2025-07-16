import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChromeReaderMode_Sharp = class IconChromeReaderMode_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 12h7v1.5h-7V12zm0-2.5h7V11h-7V9.5zm0 5h7V16h-7v-1.5zM23 4H1v17h22V4zm-2 15h-9V6h9v13z"/>');
    }
};
IconChromeReaderMode_Sharp.styles = style;
IconChromeReaderMode_Sharp = __decorate([
    customElement('mdui-icon-chrome-reader-mode--sharp')
], IconChromeReaderMode_Sharp);
export { IconChromeReaderMode_Sharp };
