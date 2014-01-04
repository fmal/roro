# roro

CSS preprocessor built on top of [Rework](https://github.com/visionmedia/rework).

## Installation

```bash
$ sudo npm install -g roro
```

## Usage

```bash
$ roro -b "last 2 versions, android 4" -o output.css input.css
```

roro has various options:

```
$ roro -h

  Usage: roro [options] <file>

  Options:

    -h, --help                      output usage information
    -V, --version                   output the version number
    -b, --browsers [config]         specify the browsers for autoprefixer
    -f, --baseFontSize [font-size]  set the base font size
    -o, --out [file]                write the output to a file
```
