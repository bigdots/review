import img from './img.jfif';
import './index.css'

var pic = new Image();
pic.src = img;

var body = document.getElementsByTagName("body")[0];
body.appendChild(pic)
