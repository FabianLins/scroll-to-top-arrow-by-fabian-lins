function linsScrollTopSavePreset() {
    const scrollArrowFill = document.querySelector('[name="lins_scroll_arrow_fill"]');
    //console.log(scrollArrowFill);

    const scrollArrowOpacity = document.querySelector('[name="lins_scroll_arrow_opacity"]');
    //console.log(scrollArrowOpacity);

    const scrollArrowBg = document.querySelector('[name="lins_scroll_arrow_color"]');
    //console.log(scrollArrowBg);

    const scrollArrowOpacityHover = document.querySelector('[name="lins_scroll_arrow_opacity_hover"]');
    //console.log(scrollArrowOpacityHover);

    const scrollArrowBgHover = document.querySelector('[name="lins_scroll_arrow_color_hover"]');
    //console.log(scrollArrowBgHover);

    const scrollArrowBgSize = document.querySelector('[name="lins_scroll_bg_size"]');
    //console.log(scrollArrowBgSize);

    const scrollArrowBgSizeLg = document.querySelector('[name="lins_scroll_bg_size_lg"]');
    //console.log(scrollArrowBgSizeLg);

    const scrollArrowBgSizeMd = document.querySelector('[name="lins_scroll_bg_size_md"]');
    //console.log(scrollArrowBgSizeMd);

    const scrollArrowBgSizeSm = document.querySelector('[name="lins_scroll_bg_size_sm"]');
    //console.log(scrollArrowBgSizeSm);

    const scrollArrowSize = document.querySelector('[name="lins_scroll_arrow_size"]');
    //console.log(scrollArrowSize);

    const scrollArrowMargin = document.querySelector('[name="lins_scroll_arrow_margin"]');
    //console.log(scrollArrowMargin);

    const scrollArrowMarginLg = document.querySelector('[name="lins_scroll_arrow_margin_lg"]');
    //console.log(scrollArrowMarginLg);

    const scrollArrowMarginMd = document.querySelector('[name="lins_scroll_arrow_margin_md"]');
    //console.log(scrollArrowMarginMd);

    const scrollArrowMarginSm = document.querySelector('[name="lins_scroll_arrow_margin_sm"]');
    //console.log(scrollArrowMarginSm);

    const scrollArrowTranslate = document.querySelector('[name="lins_scroll_arrow_translate"]');
    //console.log(scrollArrowTranslate);

    const scrollBgHeight = document.querySelector('[name="lins_scroll_bg_height"]');
    //console.log(scrollBgHeight);

    const scrollBgHeightLg = document.querySelector('[name="lins_scroll_bg_height_lg"]');
    //console.log(scrollBgHeightLg);

    const scrollBgHeightMd = document.querySelector('[name="lins_scroll_bg_height_md"]');
    //console.log(scrollBgHeightMd);

    const scrollBgHeightSm = document.querySelector('[name="lins_scroll_bg_height_sm"]');
    //console.log(scrollBgHeightSm);

    const scrollBgColor = document.querySelector('[name="lins_scroll_bg_color"]');
    //console.log(scrollBgColor);

    const scrollBgOpacity = document.querySelector('[name="lins_scroll_bg_opacity"]');
    //console.log(scrollBgOpacity);

    myPreset = {
        scrollArrowFill: scrollArrowFill.value,
        scrollArrowOpacity: scrollArrowOpacity.value,
        scrollArrowBg: scrollArrowBg.value,
        scrollArrowOpacityHover: scrollArrowOpacityHover.value,
        scrollArrowBgHover: scrollArrowBgHover.value,
        scrollArrowBgSize: scrollArrowBgSize.value,
        scrollArrowBgSizeLg: scrollArrowBgSizeLg.value,
        scrollArrowBgSizeMd: scrollArrowBgSizeMd.value,
        scrollArrowBgSizeSm: scrollArrowBgSizeSm.value,
        scrollArrowSize: scrollArrowSize.value,
        scrollArrowMargin: scrollArrowMargin.value,
        scrollArrowMarginLg: scrollArrowMarginLg.value,
        scrollArrowMarginMd: scrollArrowMarginMd.value,
        scrollArrowMarginSm: scrollArrowMarginSm.value,
        scrollArrowTranslate: scrollArrowTranslate.value,
        scrollBgHeight: scrollBgHeight.value,
        scrollBgHeightLg: scrollBgHeightLg.value,
        scrollBgHeightMd: scrollBgHeightMd.value,
        scrollBgHeightSm: scrollBgHeightSm.value,
        scrollBgColor: scrollBgColor.value,
        scrollBgOpacity: scrollBgOpacity.value
    }

    jQuery.ajax({
        type: 'post',
        url: `${window.location.origin}/wp-admin/admin-ajax.php`,
        dataType: 'json',
        data: {
            action: "save_preset",
            ajax_data: myPreset
        },
        complete: function (response) {
            alert('Preset saved successfully');
        }
    });
}