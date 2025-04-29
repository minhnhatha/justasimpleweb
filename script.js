let username, textLetterP = "Ngày này 50 năm về trước..."
let indexTextContent = 0, textLetterContent = document.querySelector(".GTA-5"), timoutTextLetterContent;
function funcTimeoutLetterContent(func) {
  indexTextContent = 0; // Reset indexTextContent
  textLetterContent.textContent = ''; // Xóa nội dung hiện tại của textLetter
  clearInterval(timoutTextLetterContent);
  timoutTextLetterContent = setInterval(() => {
      if (indexTextContent < textLetterP.length) {
          textLetterContent.textContent += textLetterP[indexTextContent];
          indexTextContent++;
          setTimeout(indexTextContent, 5);
      }
      else {
          clearInterval(timoutTextLetterContent);
          func();
      }
  }, 80)
}
document.getElementById("EnterName").addEventListener("click", function () {
  document.getElementById('fade-screen').style.opacity = '1';
  setTimeout(() => {
    document.getElementById('fade-screen').style.transition = 'opacity 2s';
    document.getElementById('fade-screen').style.opacity = '0';
    document.getElementById("NameInput").style.display = "none";
    BuiLua();
    funcTimeoutLetterContent(() => {
      document.getElementById('fade-screen').style.opacity = '1';
      setTimeout(() => {
      textLetterContent.style.display = "none";
      document.getElementById('fade-screen').style.transition = 'opacity 2s';
      document.getElementById('fade-screen').style.opacity = '0';
      document.getElementById("video-screen").style.display = "";
      document.getElementById("myVideo").play();
      setTimeout(() => {
          document.getElementById('fade-screen').style.transition = 'opacity 2s';
          document.getElementById('fade-screen').style.opacity = '0';
          document.getElementById("myAudio").play();
          setTimeout(() => {
              let imgScreen = document.getElementById('image-screen');
              textLetterP = "Đúng 11 giờ 30 phút, quân ta tiến vào Sài Gòn, đánh chiếm Dinh Độc Lập. Bộ Tổng tham mưu ngụy - Dương Văn Minh đầu hàng vô điều kiện. Cờ đỏ sao vàng phấp phới tung bay trên nóc Dinh Độc Lập. Chiến dịch Hồ Chí Minh...Toàn thắng!";
              textLetterContent = document.querySelector(".noidung11");
              imgScreen.style.transition = 'opacity 2s';
              imgScreen.style.opacity = '1';
              setTimeout(() => {funcTimeoutLetterContent(() => {
                let i = document.getElementById("Audi");
                i.currentTime = 81;
                i.play();
              })}, 7000);
          }, 500);
      }, 15000);
    }, 2000);});
  }, 2000);
    // username = document.getElementById("Name").value;
    // if (!username || username.trim() === "") alert("Vui lòng điền tên của bạn hoặc biệt danh bạn thích!");
    // else{
    //   document.getElementById('fade-screen').style.opacity = '1';

    //   setTimeout(() => {
    //     document.getElementById('fade-screen').style.transition = 'opacity 2s';
    //     document.getElementById('fade-screen').style.opacity = '0';
    //     document.getElementById("NameInput").style.display = "none";
    //     document.getElementById("video-screen").style.display = "";
    //     // textLetterContent.muted = false;
    //     textLetterContent.play();
    //     setTimeout(() => {
    //         document.getElementById('fade-screen').style.transition = 'opacity 2s';
    //         document.getElementById('fade-screen').style.opacity = '0';
    //         document.getElementById("myAudio").play();
    //         setTimeout(() => {
    //             let imgScreen = document.getElementById('image-screen');
    //             textLetterContent = document.querySelector(".noidung11");
    //             imgScreen.style.transition = 'opacity 2s';
    //             imgScreen.style.opacity = '1';
    //             setTimeout(() => {funcTimeoutLetterContent(() => {})}, 7000);
    //         }, 500);
    //     }, 15000);
    //     // document.body.style.backgroundImage = 'none';
    //     // document.getElementById('video-screen').display = "";
    //     // setTimeout(() => {
    //     //     let imgScreen = document.getElementById('video-screen');
    //     //     imgScreen.display = "";
    //     //     // imgScreen.style.transition = 'opacity 2s';
    //     //     // imgScreen.style.opacity = '1';
    //     //     // funcTimeoutLetterContent(() => {
    //     //     // });
    //     // }, 500);
    //   }, 1000);
    //   // document.getElementById("EnterName").style.display = "none";
    //   // anime({
    //   //     targets: '#NameInput',
    //   //     translateY: 500,
    //   //     opacity: 0,
    //   //     duration: 1000,
    //   //     easing: 'easeInOutQuad',
    //   //     complete: function () {
    //   //         document.getElementById("NameInput").style.display = "none";
    //   //         document.querySelector(".wrapperLetter").style.display = "";
    //   //         textLetterP = "Xin chào " + username;
    //   //         funcTimeoutLetterContent(() => {
    //   //           setTimeout(() => {
    //   //             textLetterP = "Lorem inpusim";
    //   //             textLetterContent = document.querySelector('.contentLetter22');
    //   //             funcTimeoutLetterContent(() => {
    //   //                 setTimeout(() => {document.getElementById("Instructor").style.display = "";}, 500);
    //   //               }
    //   //             );
    //   //         }, 500);
    //   //       });
    //   //     }
    //   // });
    // }
});
//-----------------------------------------------------------------------------------

// document.getElementById("Instructor").addEventListener("click", function () {
//   document.getElementById("Instructor").style.display = "none";
//   anime({
//       targets: '.wrapperLetter',
//       translateY: 500,
//       opacity: 0,
//       duration: 1000,
//       easing: 'easeInOutQuad',
//       complete: function () {
//         document.querySelector(".wrapperLetter").style.display = "none";
//         document.querySelector(".NoiDung1").style.display = "";
//         textLetterP = "Lorem";
//         textLetterContent = document.querySelector('.noidung33');
//         document.getElementById('fade-screen').style.opacity = '1';
//         setTimeout(() => {
//             document.body.style.backgroundImage = 'none';
//             document.getElementById('fade-screen').style.opacity = '0';
//             BuiLua();
//             setTimeout(() => {funcTimeoutLetterContent(() => {
//               textLetterP = "Suspendisse";
//               textLetterContent = document.querySelector('.noidung44');
//               setTimeout(() => {funcTimeoutLetterContent(() => {
//                 setTimeout(() => {document.getElementById("TrangSau").style.display = "";}, 2000);
//               });}, 2000);
//             });}, 2000);
//         }, 1000);
//       }
//   });
// });
// document.getElementById("TrangSau").addEventListener("click", function (event) {
//   event.preventDefault();
//   textLetterP = "@^!#$@.";
//   textLetterContent = document.querySelector('.noidung33');
//   document.getElementById('fade-screen').style.opacity = '1';
//   setTimeout(() => {
//       document.getElementById("TrangSau").style.display = "none";
//       document.querySelector('.noidung44').textContent = "";
//       textLetterContent.textContent = "";
//       document.getElementById('fade-screen').style.opacity = '0';
//       BuiLua();
//       setTimeout(() => {funcTimeoutLetterContent(() => {
//         textLetterP = "3245.";
//         textLetterContent = document.querySelector('.noidung44');
//         setTimeout(() => {funcTimeoutLetterContent(() => {
//           setTimeout(() => {document.getElementById("TrangSauNua").style.display = "";}, 2000);
//         });}, 2000);
//       });}, 2000);
//   }, 1000);
// });
// document.getElementById("TrangSauNua").addEventListener("click", function (event) {
//   event.preventDefault();
//   textLetterP = "Cuối cùng, dân ta đã đón khoảnh khắc lịch sử:";
//   textLetterContent = document.querySelector('.noidung33');
//   document.getElementById('fade-screen').style.opacity = '1';
//   setTimeout(() => {
//       document.getElementById("TrangSauNua").style.display = "none";
//       document.querySelector('.noidung44').textContent = "";
//       textLetterContent.textContent = "";
//       document.getElementById('fade-screen').style.opacity = '0';
//       BuiLua();
      // setTimeout(() => {funcTimeoutLetterContent(() => {
      //   textLetterP = "Đúng 11 giờ 30 phút, quân ta tiến vào Sài Gòn, đánh chiếm Dinh Độc Lập. Bộ Tổng tham mưu ngụy - Dương Văn Minh đầu hàng vô điều kiện. Cờ đỏ sao vàng phấp phới tung bay trên nóc Dinh Độc Lập. Chiến dịch Hồ Chí Minh...Toàn thắng!";
      //   textLetterContent = document.querySelector('.noidung44');
      //   document.getElementById("myAudio").play();
      //   setTimeout(() => {funcTimeoutLetterContent(() => {
      //     let i = document.getElementById("Audi");
      //     i.currentTime = 81;
      //     i.play();
      //     textLetterContent = document.querySelector('ket11');
      //     textLetterP = "kjfiugyeggrfhiyurdfuhiyghfbhwgirhsdvhiowgivsb hiosufv";
      //     setTimeout(() => {
      //       document.getElementById('fade-screen').style.transition = 'opacity 2s';
      //       document.getElementById('fade-screen').style.opacity = '0';
      //       setTimeout(() => {
      //           let imgScreen = document.getElementById('image-screen');
      //           imgScreen.style.transition = 'opacity 2s';
      //           imgScreen.style.opacity = '1';
      //           funcTimeoutLetterContent(() => {
      //           });
      //       }, 500);
      //     }, 9000);
      //     // setTimeout(() => {document.getElementById("TrangSauNua").style.display = "";}, 2000);
      //   });}, 7000);
      // });}, 2000);
//   }, 1000);
// });
// function(event) {
//   event.preventDefault(); // chặn việc chuyển trang
//   console.log('Link đã được click!');
// }
//------------------------------------------------------------------------------------
function BuiLua(){
    tsParticles.load("tsparticles", {
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: ["#ff9a00", "#ffcc00", "#ff6600"]
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.3,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },
        detectRetina: true
    });
}