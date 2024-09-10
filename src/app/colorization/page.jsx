import { Input } from "@nextui-org/react";
import { submitImage } from "@/lib/actions";
import Submit from "@/components/Submit";

function App() {
  return (
    <div className="cs-colorization">
      <h1>SAR Image Colorization</h1>
      <div className="cs-blurbg">
        <div className="cs-imagecontainer">
          <img src="/raw.jpg" alt="" />
          <img src="/arrow.svg" alt="" className="arrow" />
          <img src="colorized.jpg" alt="" />
        </div>
        <form action={submitImage}>
          <Input
            type="file"
            label="Choose Raw Image"
            accept="image/*"
            placeholder="Enter your email"
            name="image"
          />
          <Submit />
        </form>
      </div>
    </div>
  );
}

export default App;
