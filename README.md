one-page-portfolio
==================

This repo is meant to offer an example of a one page website using Bootstrap 3.

[Live Demo](http://csclub.uwaterloo.ca/~aamistak/ "Live Demo")


### A Word on Bootstrap

Bootstrap is easy to pick up, but isn't perfect by any means.  It is a great way to introduce someone to responsive web site design, but largely holds a lot of anti-patterns and expensive operations.  You should be conscious of these and then consider Bootstrap.

 - A 12 column layout with four breakpoints simplifies responsive design, but it also is an imposed, limiting class structure.  It was designed for desktop, tablets, and phones, but as the screen sizes between those become dynamic: we can do better.  Things like [singularity.gs](http://singularity.gs "singularity.gs") by [SASS](http://sass-lang.com/ "SASS") show better promise.
 - Simple but key issue with Bootstrap: HTML should **not** contain styling logic.  Semantic CSS class definitions shouldn't describe the styling like `btn btn-primary btn-lg` does.  They should be specifying: `thisButton`.  You can ease this pain by using a pre-processor like [SASS](http://sass-lang.com/ "SASS"). With it, you can encapsulate all these classes and make your HTML less verbose.
 - Bootstrap websites look the same.  If you're going to use Bootstrap, you start in a rut: your website looks like everyone else's website out of the box, despite the variations in color. 