(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="紫色之心夏日" style="background-image: url('/photos/tint/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E5%A4%8F%E6%97%A5-65ba1d.jpg')" title="紫色之心夏日">
  <img class="lazyload" data-src="/photos/thumbnail/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E5%A4%8F%E6%97%A5-9f36bc.jpg" src="/photos/tint/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E5%A4%8F%E6%97%A5-65ba1d.jpg" height="2305" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E5%A4%8F%E6%97%A5-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E5%A4%8F%E6%97%A5" data-target="紫色之心夏日">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E9%BB%91%E8%89%B2%E4%B9%8B%E5%BF%83" data-target="黑色之心" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 80D</li>
    <li>1/4</li>
    <li><span class="aperture"><em>f</em>/</span>16.0</li>
	</ul> -->
</li>
<li class="item " id="黑色之心" style="background-image: url('/photos/tint/%E9%BB%91%E8%89%B2%E4%B9%8B%E5%BF%83-65ba1d.jpg')" title="黑色之心">
  <img class="lazyload" data-src="/photos/thumbnail/%E9%BB%91%E8%89%B2%E4%B9%8B%E5%BF%83-9f36bc.jpg" src="/photos/tint/%E9%BB%91%E8%89%B2%E4%B9%8B%E5%BF%83-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E9%BB%91%E8%89%B2%E4%B9%8B%E5%BF%83-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E9%BB%91%E8%89%B2%E4%B9%8B%E5%BF%83" data-target="黑色之心">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E5%A4%8F%E6%97%A5" data-target="紫色之心夏日" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83" data-target="紫色之心" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 80D</li>
    <li>1/4</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
	</ul> -->
</li>
<li class="item " id="紫色之心" style="background-image: url('/photos/tint/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83-65ba1d.jpg')" title="紫色之心">
  <img class="lazyload" data-src="/photos/thumbnail/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83-9f36bc.jpg" src="/photos/tint/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83" data-target="紫色之心">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E9%BB%91%E8%89%B2%E4%B9%8B%E5%BF%83" data-target="黑色之心" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E6%AC%A1%E6%97%B6%E4%BB%A3" data-target="紫色之心次时代" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 80D</li>
    <li>1/4</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
	</ul> -->
</li>
<li class="item " id="紫色之心次时代" style="background-image: url('/photos/tint/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E6%AC%A1%E6%97%B6%E4%BB%A3-65ba1d.jpg')" title="紫色之心次时代">
  <img class="lazyload" data-src="/photos/thumbnail/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E6%AC%A1%E6%97%B6%E4%BB%A3-9f36bc.jpg" src="/photos/tint/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E6%AC%A1%E6%97%B6%E4%BB%A3-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E6%AC%A1%E6%97%B6%E4%BB%A3-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E6%AC%A1%E6%97%B6%E4%BB%A3" data-target="紫色之心次时代">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83" data-target="紫色之心" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E7%BE%8E%E6%9D%9C%E8%8E%8Elily2" data-target="美杜莎lily2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 80D</li>
    <li>1/4</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
	</ul> -->
</li>
<li class="item " id="美杜莎lily2" style="background-image: url('/photos/tint/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily2-65ba1d.jpg')" title="美杜莎Lily2">
  <img class="lazyload" data-src="/photos/thumbnail/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily2-9f36bc.jpg" src="/photos/tint/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily2-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily2-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E7%BE%8E%E6%9D%9C%E8%8E%8Elily2" data-target="美杜莎lily2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E7%B4%AB%E8%89%B2%E4%B9%8B%E5%BF%83%E6%AC%A1%E6%97%B6%E4%BB%A3" data-target="紫色之心次时代" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E7%BE%8E%E6%9D%9C%E8%8E%8Elily" data-target="美杜莎lily" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 80D</li>
    <li>1/4</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
	</ul> -->
</li>
<li class="item " id="美杜莎lily" style="background-image: url('/photos/tint/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily-65ba1d.jpg')" title="美杜莎Lily">
  <img class="lazyload" data-src="/photos/thumbnail/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily-9f36bc.jpg" src="/photos/tint/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E7%BE%8E%E6%9D%9C%E8%8E%8ELily-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E7%BE%8E%E6%9D%9C%E8%8E%8Elily" data-target="美杜莎lily">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E7%BE%8E%E6%9D%9C%E8%8E%8Elily2" data-target="美杜莎lily2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%85%89" data-target="光" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 80D</li>
    <li>1/4</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
	</ul> -->
</li>
<li class="item " id="光" style="background-image: url('/photos/tint/%E5%85%89-65ba1d.jpg')" title="光">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%85%89-9f36bc.jpg" src="/photos/tint/%E5%85%89-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%85%89-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E5%85%89" data-target="光">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E7%BE%8E%E6%9D%9C%E8%8E%8Elily" data-target="美杜莎lily" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E7%84%B0" data-target="焰" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS 80D</li>
    <li>3/5</li>
    <li><span class="aperture"><em>f</em>/</span>16.0</li>
	</ul> -->
</li>
<li class="item " id="焰" style="background-image: url('/photos/tint/%E7%84%B0-65ba1d.jpg')" title="焰">
  <img class="lazyload" data-src="/photos/thumbnail/%E7%84%B0-9f36bc.jpg" src="/photos/tint/%E7%84%B0-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E7%84%B0-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E7%84%B0" data-target="焰">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%85%89" data-target="光" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%B9%BC%E8%B4%9E-2-2" data-target="幼贞-2-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="幼贞-2-2" style="background-image: url('/photos/tint/%E5%B9%BC%E8%B4%9E-2-2-65ba1d.jpg')" title="幼贞-2-2">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%B9%BC%E8%B4%9E-2-2-9f36bc.jpg" src="/photos/tint/%E5%B9%BC%E8%B4%9E-2-2-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%B9%BC%E8%B4%9E-2-2-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E5%B9%BC%E8%B4%9E-2-2" data-target="幼贞-2-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E7%84%B0" data-target="焰" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/%E5%B9%BC%E8%B4%9E-1-4" data-target="幼贞-1-4" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
<li class="item " id="幼贞-1-4" style="background-image: url('/photos/tint/%E5%B9%BC%E8%B4%9E-1-4-65ba1d.jpg')" title="幼贞-1-4">
  <img class="lazyload" data-src="/photos/thumbnail/%E5%B9%BC%E8%B4%9E-1-4-9f36bc.jpg" src="/photos/tint/%E5%B9%BC%E8%B4%9E-1-4-65ba1d.jpg" height="2731" width="4096" />
  <span class="full">
    <span style="background-image: url('/photos/large/%E5%B9%BC%E8%B4%9E-1-4-78c28e.jpg')"></span>
  </span>
  <a class="open" href="/%E5%B9%BC%E8%B4%9E-1-4" data-target="幼贞-1-4">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/%E5%B9%BC%E8%B4%9E-2-2" data-target="幼贞-2-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li></li>
    <li></li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
	</ul> -->
</li>
`);