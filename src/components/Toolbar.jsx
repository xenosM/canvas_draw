import ColorChooser from "./Color-chooser"
import SizeSlider from "./Size-slider"

const Toolbar = function (){
    return(
        <section id="toolbar">
            <h1 id="toolbar-title">Toolbar</h1>
            <nav id="toolbar-nav">
                <ColorChooser/>
                <SizeSlider/>
            </nav>
        </section>
    )
}
export default Toolbar