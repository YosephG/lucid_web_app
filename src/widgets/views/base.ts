export const CSS = {
    app: "app",
    panel: "panel",
    controller: "controller",
    widget_container: "controller__widget-container",
    dropdown: "widget-dropdown",
    textbox: "textbox",
    button: "btn",
    search_img: "search__img",
    add_img: "add__img",
    remove_img: "remove__img",
    panel_obj: {
        container: "panel__widget-container",
        title: "panel__widget-title",
        button: "panel__widget-button",
        subcontainer: "panel__widget-subcontainer",
        unordered_list: "panel__widget-unordered_list",
        list_item: "panel__widget-list_item",
        heading: "panel__widget-heading",
        tab_container: "panel__tab-container",
        tab_list: "panel__tab-container-list",
        tab: "panel__tab-container-tab",
        divider: "panel__divider",
        divider2: "panel__divider-two"
    },
    modal: {
        base: "modal__base",
        panel: "modal__panel",
        close: "modal__close",
        subcontainer: "modal__subcontainer",
        title: "modal__title",
        heading: "modal__heading",
        dropdown: "modal__dropdown",
        options_list: "modal__options-list",
        button: "modal__btn",
        apply_btn: "modal__apply-btn",
        cancel_btn: "modal__cancel-btn",
        ok_btn: "modal__ok-btn",
        btn_container: "modal__btn-container",
        list_item: "modal__list-item"
    },
    acreage: {
        add: "acreage__button-add",
        dropdown: "acreage__dropdown",
        remove: "acreage__button-remove",
        list: "acreage__list",
        list_item: "acreage__list-item",
        removeAll: "acreage__button-remove_all",
        options: "acreage__options",
        options_img: "acreage__options-img",
        filter_img: "acreage__filter-img",
        remove_img: "acreage__remove-img",
        filter_list: "acreage__filter-list"
    },
    drillingInfo: {
        action_container: "drillingInfo__action-container",
        add_btn: "drillingInfo__add-btn",
        remove_btn: "drillingInfo__remove-btn",
        search_btn: "drillingInfo__search-btn",
        values_container: "drillingInfo__values-container",
        avail_opts: "drillingInfo__avail-opts",
        selected_opts: "drillingInfo__selected-opts",
        op_search: "drillingInfo__op-search"
    },
    thirdParty: {
        add_btn: "thirdParty__add-btn",
        dropdown: "thirdParty__dropdown",
        action_container: "thirdParty__action-container",
        list: "thirdParty__list",
        list_item: "thirdParty__list-item",
        options: "thirdParty__options",
        options_img: "thirdParty__options-img",
        filter_img: "thirdParty__filter-img",
        remove_img: "thirdParty__remove-img",
        values_container: "thirdParty__values-container",
        avail_opts: "thirdParty__avail-opts",
        selected_opts: "thirdParty__selected-opts",
        op_search: "thirdParty__op-search",
        field_select: "thirdParty__field-select"
    },
    symbology: {
        list: "symbology__list",
        list_item: "symbology__list-item",
        avail_opts: "symbology__avail-opts",
        values_container: "symbology__values-container",
        render_container: "symbology__render-container",
        slider_container: "symbology__slider-container",
        opacity_input: "symbology__opacity-input",
        label: "symbology__label",
        slider: "symbology__slider",
        display_container: "symbology__display-container",
        color_display: "symbology__color-display",
        current_color_display: "symbology__current-color-display",
        previous_color_display: "symbology__previous-color-display",
        display_label: "symbology__display-label",
        slider_r: "symbology__slider-r",
        slider_g: "symbology__slider-g",
        slider_b: "symbology__slider-b"
    }
};

export const elements = {
    app: `#${CSS.app}`,
    panel: `#${CSS.panel}`,
    controller: `#${CSS.controller}`,
    widget_container: `.${CSS.widget_container}`,
    list_item: `.${CSS.panel_obj.list_item}`,
    textbox: `.${CSS.textbox}`,
    button: `.${CSS.button}`,
    panel_obj: {
        tab_container: `#${CSS.panel_obj.tab_container}`,
        tab_list: `#${CSS.panel_obj.tab_list}`,
        tab: `.${CSS.panel_obj.tab}`
    },
    modal: {
        base: `#${CSS.modal.base}`,
        panel: `#${CSS.modal.panel}`,
        close: `.${CSS.modal.close}`,
        dropdown: `#${CSS.modal.dropdown}`,
        subcontainer: `.${CSS.modal.subcontainer}`,
        options_list: `.${CSS.modal.options_list}`,
        apply_btn: `#${CSS.modal.apply_btn}`,
        cancel_btn: `#${CSS.modal.cancel_btn}`,
        ok_btn: `#${CSS.modal.ok_btn}`,
        list_item: `.${CSS.modal.list_item}`
    },
    acreage: {
        add_btn: `#${CSS.acreage.add}`,
        remove_btn: `#${CSS.acreage.remove}`,
        dropdown: `#${CSS.acreage.dropdown}`,
        list: `#${CSS.acreage.list}`,
        list_item: `.${CSS.acreage.list_item}`,
        remove_all_btn: `#${CSS.acreage.removeAll}`,
        options: `.${CSS.acreage.options}`,
        options_filter: `#${CSS.acreage.filter_img}`,
        options_remove: `#${CSS.acreage.remove_img}`,
        filter_list: `#${CSS.acreage.filter_list}`
    },
    drillingInfo: {
        action_container: `#${CSS.drillingInfo.action_container}`,
        add_btn: `#${CSS.drillingInfo.add_btn}`,
        remove_btn: `#${CSS.drillingInfo.remove_btn}`,
        search_btn: `#${CSS.drillingInfo.search_btn}`,
        values_container: `.${CSS.drillingInfo.values_container}`,
        avail_opts: `#${CSS.drillingInfo.avail_opts}`,
        selected_opts: `#${CSS.drillingInfo.selected_opts}`,
        op_search: `#${CSS.drillingInfo.op_search}`
    },
    thirdParty: {
        add_btn: `#${CSS.thirdParty.add_btn}`,
        dropdown: `#${CSS.thirdParty.dropdown}`,
        action_container: `#${CSS.thirdParty.action_container}`,
        list: `#${CSS.thirdParty.list}`,
        list_item: `.${CSS.thirdParty.list_item}`,
        options: `.${CSS.thirdParty.options}`,
        options_img: `.${CSS.thirdParty.options_img}`,
        filter_img: `#${CSS.thirdParty.filter_img}`,
        remove__img: `#${CSS.thirdParty.remove_img}`,
        values_container: `.${CSS.thirdParty.values_container}`,
        avail_opts: `#${CSS.thirdParty.avail_opts}`,
        selected_opts: `#${CSS.thirdParty.selected_opts}`,
        op_search: `#${CSS.thirdParty.op_search}`,
        field_select: `#${CSS.thirdParty.field_select}`
    },
    symbology: {
        list: `#${CSS.symbology.list}`,
        list_item: `.${CSS.symbology.list_item}`,
        avail_opts: `#${CSS.symbology.avail_opts}`,
        values_container: `.${CSS.symbology.values_container}`,
        render_container: `#${CSS.symbology.render_container}`,
        slider_container: `#${CSS.symbology.slider_container}`,
        opacity_input: `#${CSS.symbology.opacity_input}`,
        label: `.${CSS.symbology.label}`,
        slider: `.${CSS.symbology.slider}`,
        display_container: `#${CSS.symbology.display_container}`,
        color_display: `.${CSS.symbology.color_display}`,
        current_color_display: `#${CSS.symbology.current_color_display}`,
        previous_color_display: `#${CSS.symbology.previous_color_display}`,
        display_label: `.${CSS.symbology.display_label}`,
        slider_r: `#${CSS.symbology.slider_r}`,
        slider_g: `#${CSS.symbology.slider_g}`,
        slider_b: `#${CSS.symbology.slider_b}`,
    }
};

export const acreageProducers = [
    "All",
    "Ameredev",
    "Apache",
    "BHP",
    "Caza",
    "Centennial",
    "Chevron",
    "Chi",
    "Chisholm",
    "Cimarex",
    "Concho",
    "Devon",
    "Energen",
    "EOG",
    "Halcon",
    "Kaiser Francis",
    "Lilis",
    "Limestone",
    "Marathon",
    "Matador",
    "Mewbourne",
    "Murchison",
    "Oasis",
    "Read & Stevens",
    "Taprock",
    "WPX",
    "XTO",
    "Yates"
];