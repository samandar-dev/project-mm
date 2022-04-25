let modalBtn = document.querySelector('.content__add-btn');
let modalBox = document.querySelector('.modall');
let modallRemBtn = document.querySelector('.modal__top-rem-btn')

let modalRemov = document.querySelector('.modalRemov');
let remNoBtn = document.querySelector('.rem__no-btn');
let remYesBtn = document.querySelector('.rem__yes-btn');

let mInputs = document.querySelectorAll('.mform__input');
let mInputTit = document.querySelectorAll('.mform__inp-tit');
let mInputErorTit = document.querySelectorAll('.mform__eror-tit');

let mCkeckBtns = document.querySelectorAll('.mright__check')
let mCkeckBtnsSpan = document.querySelectorAll('.mright__check-span')

let mDateInp = document.querySelector('.mright__data');

let mCheckB = document.querySelector('.mright__check-tit');
let mCheckSpan = document.querySelector('.mright__check-btn-span');

let mDrop = document.querySelector('.mright__drop')
let mDropTit = document.querySelector('.mform__drop-tit')
let mDropTitEror = document.querySelector('.mform__drop_eror-tit')

let mSubmitBtn = document.querySelector('#submitBtn');
let mSubmitBtn2 = document.querySelector('#submitBtn2');
let mResetBtn = document.querySelector('.mright__reset');

let nameSearchInp = document.querySelector('#search__input');

let pagSelec = document.querySelector('.bot__selec')

let messBox = document.querySelector('.addItem-messag');
let iconMass1 = document.querySelector('#iconMass1');
let iconMass2 = document.querySelector('#iconMass2');
let textMass1 = document.querySelector('#textMass1');
let textMass2 = document.querySelector('#textMass2');
let remMesseg = document.querySelector('.remMesseg');

let list = document.querySelector('.content__list');
let items;
let countRemoveItem = 2;
let countEditItem = 2;
let idCount = 1;
let time = 3000
let adCou = 1;

let arr = [
  {
    id: 1,
    name: 'Husan',
    email: 'husan@gmail.com',
    number: 1234567890,
    departament: 'Development',
  },
]

arr.forEach((obj) => {
  let li = document.createElement('li');
  li.className = "content__item";
  li.id = idCount++
  li.innerHTML = `
            <p class="conitem__tit p1">${obj.name}</p>
            <p class="conitem__tit p2">${obj.email}</p>
            <p class="conitem__tit p3">${obj.number}</p>
            <p class="conitem__tit p4">${obj.departament}</p>
            <div class="conitem__btn-box">
              <button class="conitem__change-btn" onclick="editItems(${obj.id})">
                <i class='bx bx-pencil'></i>
              </button>
              <button class="conitem__remov-btn" onclick="removItemFunc(${obj.id})">
                <i class='bx bx-x'></i>
              </button>
            </div>`;
  list.appendChild(li)
})

mSubmitBtn.addEventListener('click', modalSubmitFunc)
mResetBtn.addEventListener('click', modalResetFunc)

remMesseg.addEventListener('click', () => {
  messBox.classList.remove('d-flex')
})

modalBtn.addEventListener('click', () => {
  modalResetFunc()
  modalBox.classList.add('show-modal');
  mSubmitBtn2.classList.add('d-none')
  mSubmitBtn.classList.remove('d-none')
})
modallRemBtn.addEventListener('click', () => {
  modalBox.classList.remove('show-modal');
  modalResetFunc()
})

function modalFormFunc() {
  mInputs[0].addEventListener('click', () => {
    mInputs[0].classList.add('click-inp');
    mInputTit[0].classList.add('click-inp-tit');

    mInputs[0].addEventListener('keyup', () => {
      if (mInputs[0].value == "") {
        mInputs[0].classList.add('click-inp-eror');
        mInputTit[0].classList.add('click-inp-tit-eror');
        mInputErorTit[0].classList.add('click-eror-tit');
      } else if (mInputs[0].value != "") {
        mInputs[0].classList.remove('click-inp-eror');
        mInputTit[0].classList.remove('click-inp-tit-eror');
        mInputErorTit[0].classList.remove('click-eror-tit');
      }
    })
  })

  mInputs[1].addEventListener('click', () => {
    mInputs[1].classList.add('click-inp');
    mInputTit[1].classList.add('click-inp-tit');

    mInputs[1].addEventListener('keyup', () => {
      if (mInputs[1].value != "" && mInputs[1].value.includes("@gmail.com", -1)) {
        mInputs[1].classList.remove('click-inp-eror');
        mInputTit[1].classList.remove('click-inp-tit-eror');
        mInputErorTit[1].classList.remove('click-eror-tit');
      } else {
        mInputs[1].classList.add('click-inp-eror');
        mInputTit[1].classList.add('click-inp-tit-eror');
        mInputErorTit[1].classList.add('click-eror-tit');
      }
    })
  })

  mInputs[2].addEventListener('click', () => {
    mInputs[2].classList.add('click-inp');
    mInputTit[2].classList.add('click-inp-tit');

    mInputs[2].addEventListener('keyup', () => {
      if (Number(mInputs[2].value) && mInputs[2].value.length >= 10) {
        mInputs[2].classList.remove('click-inp-eror');
        mInputTit[2].classList.remove('click-inp-tit-eror');
        mInputErorTit[2].classList.remove('click-eror-tit');
      } else {
        mInputs[2].classList.add('click-inp-eror');
        mInputTit[2].classList.add('click-inp-tit-eror');
        mInputErorTit[2].classList.add('click-eror-tit');
      }
    })
  })

  mInputs[3].addEventListener('click', () => {
    mInputs[3].classList.add('click-inp');
    mInputTit[3].classList.add('click-inp-tit');
  })

  mCkeckBtns[0].addEventListener('click', () => {
    mCkeckBtnsSpan[0].classList.add('checkBtn-act');
    mCkeckBtnsSpan[1].classList.remove('checkBtn-act');
    mCkeckBtnsSpan[2].classList.remove('checkBtn-act');
  })

  mCkeckBtns[1].addEventListener('click', () => {
    mCkeckBtnsSpan[0].classList.remove('checkBtn-act');
    mCkeckBtnsSpan[1].classList.add('checkBtn-act');
    mCkeckBtnsSpan[2].classList.remove('checkBtn-act');
  })

  mCkeckBtns[2].addEventListener('click', () => {
    mCkeckBtnsSpan[0].classList.remove('checkBtn-act');
    mCkeckBtnsSpan[1].classList.remove('checkBtn-act');
    mCkeckBtnsSpan[2].classList.add('checkBtn-act');
  })

  mCheckB.addEventListener('click', () => {
    mCheckSpan.classList.toggle("mright__check-btn-span-act")
  })

  mDrop.addEventListener('click', () => {
    if (mDrop.value != "None") {
      mDrop.classList.add('mright__drop-act')
      mDropTit.classList.add('mform__drop-tit-act')
      mDrop.classList.remove('mright__drop-eror')
      mDropTit.classList.remove('mform__drop-tit-eror')
      mDropTitEror.classList.remove('click-eror-tit')
    }
    else {
      mDrop.value = "";
      mDrop.classList.remove('mright__drop-act')
      mDrop.classList.add('mright__drop-eror')
      mDropTit.classList.remove('mform__drop-tit-act')
      mDropTit.classList.add('mform__drop-tit-eror')
      mDropTitEror.classList.add('click-eror-tit')
    }
  })
} modalFormFunc()

function modalResetFunc() {
  mInputs.forEach((inp) => {
    inp.value = ""
    inp.classList.remove('click-inp')
    inp.classList.remove('click-inp-eror');
  })
  mInputTit.forEach((tit) => {
    tit.classList.remove('click-inp-tit');
    tit.classList.remove('click-inp-tit-eror');
  })
  mInputErorTit.forEach((etit) => {
    etit.classList.remove('click-eror-tit');
  })

  mCkeckBtnsSpan[0].classList.add('checkBtn-act');
  mCkeckBtnsSpan[1].classList.remove('checkBtn-act');
  mCkeckBtnsSpan[2].classList.remove('checkBtn-act');

  mDrop.classList.remove('mright__drop-eror')
  mDrop.classList.remove('mright__drop-act')
  mDropTit.classList.remove('mform__drop-tit-eror')
  mDropTit.classList.remove('mform__drop-tit-act')
  mDropTitEror.classList.remove('click-eror-tit')
  mDrop.value = "";
}

function modalSubmitFunc() {
  if (mInputs[0].value == "" && mInputs[2].value == "" && mDrop.value == 'None') {
    mInputs[0].classList.add('click-inp');
    mInputTit[0].classList.add('click-inp-tit');
    mInputs[2].classList.add('click-inp');
    mInputTit[2].classList.add('click-inp-tit');

    mInputs[0].classList.add('click-inp-eror');
    mInputTit[0].classList.add('click-inp-tit-eror');
    mInputErorTit[0].classList.add('click-eror-tit');
    mInputs[2].classList.add('click-inp-eror');
    mInputTit[2].classList.add('click-inp-tit-eror');
    mInputErorTit[2].classList.add('click-eror-tit');

    mDrop.value = "";
    mDrop.classList.add('mright__drop-eror')
    mDropTit.classList.add('mform__drop-tit-eror')
    mDropTitEror.classList.add('click-eror-tit')
  }
  else if (mInputs[0].value == "") {
    mInputs[0].classList.add('click-inp');
    mInputTit[0].classList.add('click-inp-tit');
    mInputs[0].classList.add('click-inp-eror');
    mInputTit[0].classList.add('click-inp-tit-eror');
    mInputErorTit[0].classList.add('click-eror-tit');
  }
  else if (mInputs[2].value == "") {
    mInputs[2].classList.add('click-inp');
    mInputTit[2].classList.add('click-inp-tit');
    mInputs[2].classList.add('click-inp-eror');
    mInputTit[2].classList.add('click-inp-tit-eror');
    mInputErorTit[2].classList.add('click-eror-tit');
  }
  else if (mDrop.value == '' || mDrop.value == 'None') {
    mDrop.classList.add('mright__drop-eror')
    mDropTit.classList.add('mform__drop-tit-eror')
    mDropTitEror.classList.add('click-eror-tit')
    mDrop.classList.remove('mright__drop-act')
    mDropTit.classList.remove('mform__drop-tit-act')
  }
  else {
    if (mDrop.value != '' && mInputs[2].value.length >= 10 && mDrop.value != 'None') {
      mDrop.classList.add('mright__drop-eror')
      mDropTit.classList.add('mform__drop-tit-eror')
      mDropTitEror.classList.add('click-eror-tit')
      mDrop.classList.remove('mright__drop-act')
      mDropTit.classList.remove('mform__drop-tit-act')

      let li = document.createElement('li');
      li.className = "content__item";
      li.id = idCount++
      li.innerHTML = `
            <p class="conitem__tit p1">${mInputs[0].value}</p>
            <p class="conitem__tit p2">${mInputs[1].value}</p>
            <p class="conitem__tit p3">${mInputs[2].value}</p>
            <p class="conitem__tit p4">${mDrop.value}</p>
            <div class="conitem__btn-box">
              <button class="conitem__change-btn" onclick="editItems(${countEditItem++})">
                <i class='bx bx-pencil'></i>
              </button>
              <button class="conitem__remov-btn" onclick="removItemFunc(${countRemoveItem++})">
                <i class='bx bx-x'></i>
              </button>
            </div>`;

      list.appendChild(li)
      modalBox.classList.remove('show-modal');
      modalResetFunc()
      items = document.querySelectorAll('.content__item')
      messBox.classList.add('d-flex');
      iconMass1.classList.add('d-flex')
      textMass1.classList.add('d-flex')
      messBox.style.backgroundColor = "#edf7ed";
      time = 3000
      setTimeout((e) => {
        console.log('rem');
        messBox.classList.remove('d-flex')
      }, time)
      adCou++
    }
  }
}

function editItems(id) {
  mSubmitBtn.classList.add('d-none')
  mSubmitBtn2.classList.remove('d-none')

  items.forEach((itmm) => {
    if (itmm.id == id) {
      itmm.classList.add('edit');
      itmm.classList.add('d-flex')
      itmm.classList.remove('d-none')
      modalBox.classList.add('show-modal');
      mInputs[0].value = itmm.childNodes[1].textContent;
      mInputs[1].value = itmm.childNodes[3].textContent;
      mInputs[2].value = itmm.childNodes[5].textContent;
      mDrop.value = itmm.childNodes[7].textContent;

      mInputs[0].classList.add('click-inp');
      mInputTit[0].classList.add('click-inp-tit');

      mInputs[1].classList.add('click-inp');
      mInputTit[1].classList.add('click-inp-tit');

      mInputs[2].classList.add('click-inp');
      mInputTit[2].classList.add('click-inp-tit');

      mInputs[3].classList.add('click-inp');
      mInputTit[3].classList.add('click-inp-tit');

      mDrop.classList.add('mright__drop-act')
      mDropTit.classList.add('mform__drop-tit-act')

      mSubmitBtn2.addEventListener('click', () => {
        if (mInputs[0].value == "" && mInputs[2].value == "" && mDrop.value == 'None') {
          mInputs[0].classList.add('click-inp');
          mInputTit[0].classList.add('click-inp-tit');
          mInputs[2].classList.add('click-inp');
          mInputTit[2].classList.add('click-inp-tit');

          mInputs[0].classList.add('click-inp-eror');
          mInputTit[0].classList.add('click-inp-tit-eror');
          mInputErorTit[0].classList.add('click-eror-tit');
          mInputs[2].classList.add('click-inp-eror');
          mInputTit[2].classList.add('click-inp-tit-eror');
          mInputErorTit[2].classList.add('click-eror-tit');

          mDrop.value = "";
          mDrop.classList.add('mright__drop-eror')
          mDropTit.classList.add('mform__drop-tit-eror')
          mDropTitEror.classList.add('click-eror-tit')
        }
        else if (mInputs[0].value == "") {
          mInputs[0].classList.add('click-inp');
          mInputTit[0].classList.add('click-inp-tit');
          mInputs[0].classList.add('click-inp-eror');
          mInputTit[0].classList.add('click-inp-tit-eror');
          mInputErorTit[0].classList.add('click-eror-tit');
        }
        else if (mInputs[2].value == "") {
          mInputs[2].classList.add('click-inp');
          mInputTit[2].classList.add('click-inp-tit');
          mInputs[2].classList.add('click-inp-eror');
          mInputTit[2].classList.add('click-inp-tit-eror');
          mInputErorTit[2].classList.add('click-eror-tit');
        }
        else if (mDrop.value == '' || mDrop.value == 'None') {
          mDrop.classList.add('mright__drop-eror')
          mDropTit.classList.add('mform__drop-tit-eror')
          mDropTitEror.classList.add('click-eror-tit')
          mDrop.classList.remove('mright__drop-act')
          mDropTit.classList.remove('mform__drop-tit-act')
        }
        else {
          if (mDrop.value != '' && mInputs[2].value.length >= 10 && mDrop.value != 'None') {
            if (itmm.classList.contains('edit')) {
              itmm.childNodes[1].textContent = mInputs[0].value
              itmm.childNodes[3].textContent = mInputs[1].value
              itmm.childNodes[5].textContent = mInputs[2].value
              itmm.childNodes[7].textContent = mDrop.value
              modalBox.classList.remove('show-modal');
              itmm.classList.remove('edit');
            }
          }
        }
      })
    }
  })
}

function removItemFunc(id) {
  items.forEach((itm, inxx) => {
    if (itm.id == id) {
      itm.classList.add('remove')
      modalRemov.classList.add('show-modal')
      remYesBtn.addEventListener('click', () => {
        if (itm.classList.contains('remove')) {
          itm.remove();
          modalRemov.classList.remove('show-modal')
          messBox.classList.add('d-flex');
          iconMass1.classList.remove('d-flex')
          textMass1.classList.remove('d-flex')
          iconMass2.classList.add('d-flex')
          textMass2.classList.add('d-flex')
          messBox.style.backgroundColor = "#fdecea";
          time += 3000
          setTimeout((e) => {
            messBox.classList.remove('d-flex')
          }, time)
        }
      })
    }
  })
}

function noRemovFunc() {
  items.forEach((itm) => {
    if (itm.classList.contains('remove')) {
      itm.classList.remove('remove')
      modalRemov.classList.remove('show-modal')
    }
  })
}

remYesBtn.addEventListener('click', removItemFunc)
remNoBtn.addEventListener('click', noRemovFunc)

nameSearchInp.addEventListener('keyup', () => {
  items.forEach((itme) => {
    if (itme.childNodes[1].textContent.includes(nameSearchInp.value)) {
      itme.classList.add('d-flex')
      itme.classList.remove('d-none')
    }
    else {
      itme.classList.add('d-none')
      itme.classList.remove('d-flex')
    }
  })
})

let emplNameSort = document.querySelector('#empName')
let emaAddresSort = document.querySelector('#emaAddres')
let mobilNumSort = document.querySelector('#mobilNum')
let deparSort = document.querySelector('#deparSort')
let nameSort = document.querySelectorAll('#nameSort')


// items.forEach((itm, indx) => {
//   emplNameSort.addEventListener('click', () => {
//     if (indx >= 5) {
//       console.log(itm);
//     }
//   })
// })


// function pagFunc() {
//   items.forEach((ite, inx) => {
//     if (ite.length > 5) {
//       pagSelec.addEventListener('click', () => {
//         console.log(pagSelec.value);
//         if (inx <= pagSelec.value) {
//           ite.classList.remove('d-none')
//           ite.classList.add('d-flex')
//         }
//         if (inx <= pagSelec.value) {
//           ite.classList.remove('d-none')
//           ite.classList.add('d-flex')
//         }
//         if (inx <= pagSelec.value) {
//           ite.classList.remove('d-none')
//           ite.classList.add('d-flex')
//         }
//         else {
//           ite.classList.add('d-none')
//         }
//       })
//     }
//   })
// } pagFunc()