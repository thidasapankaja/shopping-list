import TopCarosel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <TopCarosel />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button onClick={() => navigate("/shopping")}>Shopping</button>
        <button onClick={() => navigate("/history")}>History</button>
      </div>
    </div>
  );
}

export default Landing;
