jquery-slider
==============

A simple jQuery slider plug-in. Very basic, simple to use and modify.

## Getting started ##

### 1. Get a copy of the plugin ###

You can fork or download the plugin from GitHub, or you can install it through `npm` or `bower`.

```
$ npm install basic-jquery-slider
```

```
$ bower install basic-jquery-slider
```

### 2. Load the required files ###

Inside the page's head tag include the slider's CSS file.

```html
<link href="libs/slider.css" rel="stylesheet" type="text/css" />
```

In the page's footer, just before <code>&lt;/body&gt;</code>, include the required JavaScript files.

```html
<script src="libs/jquery-1.10.2.min.js"></script>
<script src="libs/slider.js"></script>
```

### 3. Create the HTML markup ###

```html
<div class="main-slider-container">
		<div class="prev crousel-navigation"></div>
		<div class="next crousel-navigation"></div>
		<div class="slider-container">
				<ul>
					<!-- Slide 1 -->
                    <li>
						<h3>Title 1</h3>	
						<p>Some text description. Some text description. Some text description. Some text description. Some text description. Some text description.</p>
						<div class="crousel-image-outer">
							<img src="images/1.png" alt="1" width="200" height="200" />	
						</div>
					</li>	
                    <!-- Slide 2 -->
					<li>
						<h3>Title 2</h3>
						<p>Some text description. Some text description. Some text description. Some text description. Some text description. Some text description.</p>
						<div class="crousel-image-outer">
							<img src="images/2.png" alt="1" width="200" height="200" />	
						</div>
					</li>
				</ul>
		</div>
	  </div>
```

### 4. Instantiate the slider ###

```html
<script type="text/javascript">
	$(document).ready(function() {
		$(".main-slider-container").basicSlider();
	});
</script>
```

## Support ##

If you found a bug or have a feature suggestion, please submit it in the [Issues tracker](https://github.com/meerajwadhwa15/basic-jquery-slider/issues).


## License ##

The plugin is available under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.