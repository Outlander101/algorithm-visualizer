import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VisualizerCanvas from "./components/VisulalizerCanvas";

export default function App() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <VisualizerCanvas />
            </div>
        </div>
    );
}