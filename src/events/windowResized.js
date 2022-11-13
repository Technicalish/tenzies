import { useEffect } from "react";
export default function() {
  useEffect(() => {
    function windowResized(e) {
    var container = document.querySelector(".container");
    var button = document.querySelector("button");
    var height = document.body.clientHeight * 0.8;
    var width = document.body.clientWidth * 0.8;
    var size = Math.min(height, width);
    var value = size * (16 / 150);
    container.style.width = size + "px";
    var font = `normal normal 900 ${value}px/${value}px  sans-serif`;
    button.style.font = font;
    }
    windowResized();
    window.addEventListener("resize", windowResized);
  }, []);
}