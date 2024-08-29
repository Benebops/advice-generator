/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import Card from "react-bootstrap/Card";
import { LineIcon } from "./LineIcon";
import MobileLineIcon from "./MobileLineIcon";
import RefreshIcon from "./RefreshIcon";
import { useState } from "react";

const AdviceCard = () => {
  const [slip, setSlip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setSlip(response.data.slip);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="advice-card-container">
        <Card  className="fw-bold yyy">
          <Card.Body>
            <Card.Title className="bit">Advice #{slip.id}</Card.Title>
            <Card.Text className="bitA">
              {loading ? <p>Loading...</p> : <p>"{slip.advice}"</p>}
              {error && <p>Error: {error}</p>}
            </Card.Text>
            <div className="line-icon-container d-none d-lg-block">
              <LineIcon />
            </div>
            <div className="Mobile-line-icon-container d-lg-none">
            <MobileLineIcon/>
            </div>
          </Card.Body>
        </Card>
        <div className="dice-container" onClick={fetchAdvice}>
          <RefreshIcon />
        </div>
      </div>
    </>
  );
};

export default AdviceCard;
