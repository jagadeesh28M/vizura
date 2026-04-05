import Bg from "./components/Bg";
import { Github } from "./components/Github";
import { Card } from "./components/Card";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="font-montserrat flex items-center justify-center min-h-screen relative">
      <Bg />
      <Card />
      <div className="absolute bottom-4 right-4">
        <Github />
        <Analytics />
      </div>
    </div>
  );
}

export default App;
