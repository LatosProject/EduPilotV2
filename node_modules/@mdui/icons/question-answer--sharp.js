import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuestionAnswer_Sharp = class IconQuestionAnswer_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6h-3v9H6v3h12l4 4V6zm-5 7V2H2v15l4-4h11z"/>');
    }
};
IconQuestionAnswer_Sharp.styles = style;
IconQuestionAnswer_Sharp = __decorate([
    customElement('mdui-icon-question-answer--sharp')
], IconQuestionAnswer_Sharp);
export { IconQuestionAnswer_Sharp };
