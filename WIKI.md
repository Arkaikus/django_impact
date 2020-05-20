# WIKI

En este documento se presentan los bloques de django template usados en cada html y su jerarquía

TO-DO: Completar documentación

## Base

Archivo base: **templates/impact/impact.html**  

### Bloques:

- page_title_wrap
- page_title
- site_metadata
- google_metadata
- twitter_metadata
- graph_metadata
- stylesheets
- header_javascript
- body_wrap
- body_content
- footer_javascript

## Front

Archivo base: **templates/impact/front/front.html**  
Extiende de: **templates/impact/impact.html**  
TO-DO: organizar los archivos libreria

### Bloques:

- header_wrap
- navbar_wrap
- navbar_container_wrap
- navbar_content
- navbar_brand_wrap
- light_logo
- dark_logo
- navbar_collapse_wrap
- navbar_collapse_header_wrap
- collapse_brand
- collapse_logo
- navbar_items_wrap
- navbar_items
- navbar_end
- main_wrap
- preloader_wrap
- main_content
- footer

## Dashboard

Archivo base: **templates/impact/dashboard/dashboard.html**  
Extiende de: **templates/impact/impact.html**  
TO-DO: organizar los archivos libreria

### Bloques:

- sidebar_wrap
- main_wrap
- main_navbar_wrap
- main_header_wrap
- main_header_content_wrap
- main_header_content
- main_header_main_row
- main_header_page_info
- page_name
- breadcrumb_wrap
- main_header_second_row_wrap
- main_header_second_row 		TO-DO: _content
- page_content_wrap
- page_content
- page_footer
