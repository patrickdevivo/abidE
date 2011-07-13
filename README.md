# Apiqe Shopify
- 360/ - is 360 html/css/js, jQuery reel plugin + a bunch of frames
- Animation/ - is an After Effects file...playing around with bubbles
- Shopify/ - is the Shopify theme
- bubbles/ - is html/css/js of bubble effect (HTML5, canvas, paperjs)
- whatever/ - is just a dump of whatever...

## General Theme Management

- Use TextMate + Shopify TextMate Bundle to edit and reupload theme files (<http://wiki.shopify.com/Shopify_Textmate_Bundle>)
- The current theme is a customized version of the Couture theme: <http://themes.shopify.com/themes/couture/styles/arioso>
- Assets are stored on Shopify CDN, so be careful about uploading images/css/js, it might take a while for changes to show up on the live site (unless you upload using different file names)
- Theme settings can be managed in the Shopify admin. Theme settings are controlled in the `Shopify/config/settings.html` file, see Shopify documentation for more info: <http://wiki.shopify.com/Theme_Settings>. Theme settings are stored in `Shopify/config/settings_data.json`

## Slider Images

- Currently there are 3 sliders on the site: home, slider1, and slider2
- Slider images can be uploaded via the theme settings page in the Shopify admin area: <https://apiqe.myshopify.com/admin/themes/1621032/settings>
	- See "Home Page" tab and "Slider 1" and "Slider 2" tabs
- Sliders are fixed width (images are cropped to 952px on upload) and flexible height - the slider height will be the height of the tallest image in the slideshow
- Currently, each slider can hold 5 images and the time setting (time per slide) of slider 1 and slider 2 are the time setting used by the home slider (see "Home Page tab")

## Product Management

- Individual products are organized into collections (smart collections and custom collections). The 3 apiqe machines are in the smart collection "apiqe machines" which searches for the keyword "machine" in the product "type"
- As more images are added to a product, thumbnails appear on the product-page, clicking each thumbnail will bring up the full-size image in the "gallery view"
	- Be sure to upload images that are the same width for product pages, it looks funny (jumps) when the gallery switches between different size (mainly diff width) images

### Product 360

- The "VIEW 3D" link for 360 products is in the product description along with the image that gets replaced by the jQuery reel plugin with the 360. The jQuery that handles the 360 has two parts: the lightbox (fancybox plugin: <http://fancybox.net/>) and the actual 360 frame loader (reel plugin: <http://jquery.vostrel.cz/reel>). All the markup (HTML) for the 360 is in the product description (accessible via Shopify admin).
- The jQuery which executes the lightbox and 3D is in the theme file 'layout/theme.liquid'

