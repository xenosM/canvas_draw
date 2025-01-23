import ColorPicker from "./Color-picker";
import SizeSlider from "./Size-slider"
import Clear from "../components/Clear"

const Toolbar = function (){
    return (
      <section id="toolbar">
        <h1 id="toolbar-title">Toolbar</h1>
        <nav id="toolbar-nav">
          <ColorPicker />
          <SizeSlider />
          <Clear />
        </nav>
      </section>
    );
}
export default Toolbar