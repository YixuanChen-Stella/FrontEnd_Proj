import React from "react";
import cats1Image from "../cats1.jpg";
import cats2Image from "../cat2.jpg";

function Panels() {
  return (
      <div className="panels-container">
        <div className="panel panel-left">
          <div className="panel-image">
            <img
                src={cats1Image}
                alt="This is a British Cat."
            />
          </div>
          <div className="panel-content">
            <h3 className="panel-title">The Playful British Shorthair</h3>
            <p className="panel-description">
              This cute British Shorthair kitten loves to play and explore. With its round face and thick fur, it's both adorable and charming.
            </p>
          </div>
        </div>

        <div className="panel panel-right">
          <div className="panel-content">
            <h3 className="panel-title">Curious British Blue Cat</h3>
            <p className="panel-description">
              The British Blue cat is known for its striking blue-gray coat and golden eyes. This curious kitty enjoys a quiet corner to relax and observe the world.
            </p>
          </div>
          <div className="panel-image">
            <img
                src={cats2Image}
                alt="This is a British Short Blue Cat."
            />
          </div>
        </div>
      </div>
  );
}

export default Panels;
