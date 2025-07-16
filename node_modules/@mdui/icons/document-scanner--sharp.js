import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDocumentScanner_Sharp = class IconDocumentScanner_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 3H4v3H2V1h5v2zm15 3V1h-5v2h3v3h2zM7 21H4v-3H2v5h5v-2zm13-3v3h-3v2h5v-5h-2zM19 4v16H5V4h14zm-4 4H9v2h6V8zm0 3H9v2h6v-2zm0 3H9v2h6v-2z"/>');
    }
};
IconDocumentScanner_Sharp.styles = style;
IconDocumentScanner_Sharp = __decorate([
    customElement('mdui-icon-document-scanner--sharp')
], IconDocumentScanner_Sharp);
export { IconDocumentScanner_Sharp };
