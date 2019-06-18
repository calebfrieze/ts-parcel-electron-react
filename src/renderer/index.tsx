import * as React from "react";
import * as ReactDOM from "react-dom";
import { ExampleComponent } from "./components/ExampleComponent.tsx/ExampleComponent";

const App: React.FC = () => (
  <>
    <p>This app was built with Electron + TypeScript + React and bundled by Parcel</p>
    <ExampleComponent />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
