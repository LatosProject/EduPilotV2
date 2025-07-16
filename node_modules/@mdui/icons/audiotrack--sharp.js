import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAudiotrack_Sharp = class IconAudiotrack_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>');
    }
};
IconAudiotrack_Sharp.styles = style;
IconAudiotrack_Sharp = __decorate([
    customElement('mdui-icon-audiotrack--sharp')
], IconAudiotrack_Sharp);
export { IconAudiotrack_Sharp };
