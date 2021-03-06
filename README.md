# react-google-slides

A very thin wrapper for displaying Google Slides with React

## Installation

```bash
npm i react-google-slides
```

```bash
yarn add react-google-slides
```

## Usage

```tsx
import * as React from "react";

import ReactGoogleSlides from "react-google-slides";

class Example extends React.Component {
  render() {
    return (
      <ReactGoogleSlides
        width={640}
        height={480}
        slidesLink="https://docs.google.com/presentation/d/172oFC8-LBw0GQEymFDbTBn-ORh7wi2ByfUXrXm7H-AM"
        slideDuration={5}
        showControls
        loop
      />
    );
  }
}
```

Check out the [example](https://github.com/AJHenry/react-google-slides/blob/master/example/src/App.js) app for some more usage

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT © [AJHenry](https://github.com/AJHenry)
