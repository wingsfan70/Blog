My Blog
========

This blog is created using [Jekyll](https://jekyllrb.com/). I used a theme from [JekyllThemes.io](https://jekyllthemes.io) desgined by Dirk Fabisch. 
The name of the theme is [Mediator](https://jekyllthemes.io/theme/23502084/mediator). 

Features
-------
* Fully Responsive layout
* Use header images in articles, if you want to (add tag "image" and url to the image in the front matter section of a post)
* Minimal design
* Featured article support
* FontAwesome implemented for easy use of icons fonts
* Free & Open Source Font usage

Configuration
-----

The main settings happen in side of the _config.yml file:

### Site

Main settings for the site

* **title**: name of your site
* **description**: description of your site
* **logo**: small logo for the site (300x * 300x)
* **cover**: large background image on the index page
* **name**: name site owner
* **email**: mail address of the site owner
* **author**: author name
* **author_image**: small image of author (300x * 300px)
* **disqus**: add a disqus forum for your post

### Social

The template allows to add all major social platforms to your site.
Fill the the form for each platform. If you leave the share_* entries empty, the sharing buttons below a post are not shown.  If you leave the **url** and **desc** empty the icons are not shown on the index page, but the share icons on the article pages remains untouched (Thanks to [Phil](https://github.com/philsturgeon))

* **icon**:	name of social platform (must match a name of [font-awsome](http://fortawesome.github.io/Font-Awesome/) icon set )
* **url**:	url of your account
* **desc**: slogan of the platform
* **share_url**: share url
* **share_title**: first part of url for the title
* **share_link**: second part of the share url for the link to the post

The Liquid template engine will magical combine the different parts to a share url.

```
http://twitter.com/share?text=post_title&amp;url=post_url
````

See [_config.yml](https://github.com/wingsfan70/Blog/blob/master/_config.yml) for more examples.

Front Matter
-----

This template uses the the following items in the front matter for each post. Some of the items are the standard items in 
a typical Jekyll post like:

* **layout**: post
* **title**: "The Blog Project"
* **date**: 2016-08-04 10:18:00
* **categories**: blog
* **tags**: projects blog featured

The following items are more specific.

Each post can have an image for the top of the post. If left blank there will just be a black background

* **image**: /assets/article_images/blog_project/blog_proj1.jpg (image for screens > 800px)
* **image2**: /assets/article_images/blog_project/blog_proj1-mobile.jpg (image for screens < 800px)

On each post you can control the color of the font of the title and the color of the font for the read time.
This template uses a javascript library [readingTime.js](http://michaelynch.com) to determine the estimated time to read the post. 
The read time and post title are displayed on the image so I created these items in the front matter to allow
the author to adjust the font colors based on the background image

* **fontcolor**: "#333333" (Determines the Title font color for the post)
* **readcolor**: "#333333" (Determines the read time font color for the post)

Licensing
---------

[MIT](https://github.com/wingsfan70/Blog/blob/master/LICENCE) with no added caveats, so feel free to use this on your site without linking back to me or using a disclaimer or anything silly like that.

Contact
-------
I'd love to hear from you at [@wingsfan70](https://twitter.com/wingsfan70). Feel free to open issues if you run into trouble or have suggestions. Pull Requests always welcome.
