!function(){var t=AstraBuilderPrimaryHeaderData.tablet_break_point||768,r=AstraBuilderPrimaryHeaderData.mobile_break_point||544;wp.customize("astra-settings[hb-header-height]",function(a){a.bind(function(a){var e;""==a.desktop&&""==a.tablet&&""==a.mobile||(e=(e=(e=(e=(e=(e=(e="")+".ast-mobile-header-wrap .ast-primary-header-bar , .ast-primary-header-bar .site-primary-header-wrap {min-height: "+a.desktop+"px;} .ast-desktop .ast-primary-header-bar .main-header-menu > .menu-item {")+"line-height: "+a.desktop+"px;} ")+"@media (max-width: "+t+"px) {.ast-mobile-header-wrap .ast-primary-header-bar , .ast-primary-header-bar .site-primary-header-wrap {")+"min-height: "+a.tablet+"px;} ")+"} @media (max-width: "+r+"px) {")+".ast-mobile-header-wrap .ast-primary-header-bar , .ast-primary-header-bar .site-primary-header-wrap {min-height: "+a.mobile+"px;} } ",astra_add_dynamic_css("hb-header-height",e))})}),wp.customize("astra-settings[hb-header-main-layout-width]",function(a){a.bind(function(a){var e="";"content"!==a?e+="#masthead .ast-container, .site-header-focus-item + .ast-breadcrumbs-wrapper {max-width: unset;padding-left: 35px;padding-right: 35px;} ":e="#masthead .ast-container, .site-header-focus-item + .ast-breadcrumbs-wrapper {max-width: 100%padding-left: 20px;padding-right: 20px;} ",e=e+("@media (max-width: "+AstraBuilderPrimaryHeaderData.header_break_point)+"px) {#masthead .ast-mobile-header-wrap .ast-above-header-bar, #masthead .ast-mobile-header-wrap .ast-primary-header-bar, #masthead .ast-mobile-header-wrap .ast-below-header-bar {padding-left: 20px;padding-right: 20px;} } ",astra_add_dynamic_css("hb-header-main-layout-width",e)})}),wp.customize("astra-settings[hb-header-main-sep]",function(a){a.bind(function(a){var e="",e=(e=(e+=".ast-header-break-point .ast-primary-header-bar, .ast-primary-header-bar {")+("border-bottom-width: "+a+"px;")+"border-bottom-style: solid;")+("border-color:"+wp.customize("astra-settings[hb-header-main-sep-color]").get()+";")+"}";astra_add_dynamic_css("hb-header-main-sep",e)})}),astra_css("astra-settings[hb-header-main-sep-color]","border-color",".ast-header-break-point .ast-primary-header-bar, .ast-primary-header-bar"),astra_apply_responsive_background_css("astra-settings[hb-header-bg-obj-responsive]",".main-header-bar","desktop"),astra_apply_responsive_background_css("astra-settings[hb-header-bg-obj-responsive]",".ast-primary-header.main-header-bar","tablet"),astra_apply_responsive_background_css("astra-settings[hb-header-bg-obj-responsive]",".ast-primary-header.main-header-bar","mobile"),astra_builder_advanced_css("section-primary-header-builder",".ast-desktop .ast-primary-header-bar, .ast-header-break-point .ast-primary-header-bar"),astra_builder_visibility_css("section-primary-header-builder",".ast-primary-header-bar","grid"),wp.customize("astra-settings[section-header-builder-layout-margin]",function(a){a.bind(function(a){var e;""==a.desktop.bottom&&""==a.desktop.top&&""==a.desktop.left&&""==a.desktop.right&&""==a.tablet.bottom&&""==a.tablet.top&&""==a.tablet.left&&""==a.tablet.right&&""==a.mobile.bottom&&""==a.mobile.top&&""==a.mobile.left&&""==a.mobile.right||(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e="")+".ast-hfb-header .site-header {margin-left: "+a.desktop.left+a["desktop-unit"]+";")+"margin-right: "+a.desktop.right+a["desktop-unit"]+";")+"margin-top: "+a.desktop.top+a["desktop-unit"]+";")+"margin-bottom: "+a.desktop.bottom+a["desktop-unit"]+";")+"} @media (max-width: "+t+"px) {")+".ast-hfb-header .site-header {margin-left: "+a.tablet.left+a["tablet-unit"]+";")+"margin-right: "+a.tablet.right+a["tablet-unit"]+";")+"margin-top: "+a.tablet.top+a["desktop-unit"]+";")+"margin-bottom: "+a.tablet.bottom+a["desktop-unit"]+";} ")+"} @media (max-width: "+r+"px) {")+".ast-hfb-header .site-header {margin-left: "+a.mobile.left+a["mobile-unit"]+";")+"margin-right: "+a.mobile.right+a["mobile-unit"]+";")+"margin-top: "+a.mobile.top+a["desktop-unit"]+";")+"margin-bottom: "+a.mobile.bottom+a["desktop-unit"]+";} } ",astra_add_dynamic_css("section-header-builder-layout-margin-toggle-button",e))})})}(jQuery);