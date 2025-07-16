import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconQuestionAnswer_TwoTone = class IconQuestionAnswer_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 11V4H4v8.17l.59-.58.58-.59H6z" opacity=".3"/><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10zM4.59 11.59l-.59.58V4h11v7H5.17l-.58.59z"/>');
    }
};
IconQuestionAnswer_TwoTone.styles = style;
IconQuestionAnswer_TwoTone = __decorate([
    customElement('mdui-icon-question-answer--two-tone')
], IconQuestionAnswer_TwoTone);
export { IconQuestionAnswer_TwoTone };
