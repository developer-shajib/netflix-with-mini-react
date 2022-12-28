
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Carousel } from 'bootstrap';
import 'boxicons/css/boxicons.css'
import './App.scss'
import swal from 'sweetalert';
import './App.js'
import tvImg from './image/tv.png'
import downloadImg from './image/downloadImg.jpg'
import download_img from './image/boxshot.png'
import down_gif from './image/download-icon.gif'
import kidsImg from './image/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png'


document.querySelector('.tv_img').setAttribute('src',tvImg);
document.querySelector('.downloadImg').setAttribute('src',downloadImg);
document.querySelector('.download_img').setAttribute('src',download_img);
document.querySelector('.down_gif').setAttribute('src',down_gif);
document.querySelector('.kidsImg').setAttribute('src',kidsImg);


// const baton = document.getElementById('baton')


// baton.onclick = ()=>{
//     swal("Good job!", "You clicked the button!", "success");

// }