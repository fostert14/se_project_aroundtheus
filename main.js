!function(){"use strict";class e{constructor(e,t,n,s){this._name=e.name,this._link=e.link,this._cardSelector=t,this._popupWithImage=n,this._handleCardClick=s}_setEventListeners(){this._likeButton=this._cardElement.querySelector(".content__card-like-button"),this._deleteButton=this._cardElement.querySelector(".content__card-delete-button"),this._imageContainer=this._cardElement.querySelector(".content__card-image"),this._cardImage.addEventListener("click",(()=>{this._handleImageClick()})),this._likeButton.addEventListener("click",(()=>{this._handleLikeIcon()})),this._deleteButton.addEventListener("click",(()=>{this._handleDeleteIcon()}))}_handleDeleteIcon(){this._cardElement.remove(),this._cardElement=null}_handleLikeIcon(){this._likeButton.classList.toggle("content__card-like-button_clicked")}_handleImageClick(){this._handleCardClick(this._name,this._link)}getView(){return this._cardElement=document.querySelector(this._cardSelector).content.querySelector(".content__card").cloneNode(!0),this._cardTitle=this._cardElement.querySelector(".content__card-text"),this._cardImage=this._cardElement.querySelector(".content__card-image"),this._renderCard(),this._setEventListeners(),this._cardElement}_renderCard(){this._cardTitle.textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name}}class t{constructor(e,t){this._formElement=t,this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButton=this._formElement.querySelector(e.submitButtonSelector),this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._inputElements=[...this._formElement.querySelectorAll(this._inputSelector)]}_showInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}_hideInputError(e){const t=this._formElement.querySelector(`#${e.id}-error`);e.classList.remove(this._inputErrorClass),t.textContent=""}_checkFormValidity(){return this._inputElements.every((e=>e.validity.valid))}_checkInputValidity(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}toggleButtonState(){this._checkFormValidity()?(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1):(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0)}resetValidation(){this.toggleButtonState(),this._inputElements.forEach((e=>{this._hideInputError(e)}))}_setEventListeners(){this._inputElements.forEach((e=>{e.addEventListener("input",(()=>{this._checkInputValidity(e),this.toggleButtonState()}))}))}enableValidation(){this._formElement.addEventListener("submit",(e=>{e.preventDefault()})),this._setEventListeners()}}const n=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),o=document.querySelector('input[name="name"]'),i=document.querySelector('input[name="description"]');document.querySelector(".profile__info-name"),document.querySelector(".profile__info-description"),document.querySelector('input[name="title"]'),document.querySelector('input[name="link"]');class r{constructor(e){let{popupSelector:t}=e;this._popupElement=document.querySelector(t)}open(){this._popupElement.classList.add("modal_opened"),document.addEventListener("keydown",this.closeModalByEscape),document.addEventListener("click",this.closeModalOnRemoteClick)}close(){this._popupElement.classList.remove("modal_opened"),document.removeEventListener("keydown",this.closeModalByEscape),document.removeEventListener("click",this.closeModalOnRemoteClick)}closeModalByEscape=e=>{"Escape"===e.key&&this.close()};closeModalOnRemoteClick=e=>{e.target.classList.contains("modal_opened")&&this.close()};setEventListeners(){this._closeButton=this._popupElement.querySelector(".modal__exit-button"),this._closeButton.addEventListener("click",(()=>this.close()))}}class a extends r{constructor(e,t){super({popupSelector:e}),this._handleSubmit=t,this._form=this._popupElement.querySelector("form")}reset(){this._form&&this._form.reset()}close=()=>{super.close(),this.reset()};_getInputValues(){const e=[...this._popupElement.querySelectorAll("input")],t={};for(const n of e)t[n.name]=n.value;return t}setEventListeners(){super.setEventListeners(),this._popupElement.addEventListener("submit",(e=>{e.preventDefault(),this._handleSubmit(this._getInputValues())}))}}const l={},c=t=>{const n=new e(t,"#card-template",u,((e,t)=>u.open(e,t)));h.addItem(n.getView())},m=new class{constructor(e){let{nameSelector:t,jobSelector:n}=e;this._nameElement=document.querySelector(t),this._jobElement=document.querySelector(n)}getUserInfo(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}setUserInfo(e){let{name:t,job:n}=e;this._nameElement.textContent=t,this._jobElement.textContent=n}}({nameSelector:".profile__info-name",jobSelector:".profile__info-description"}),u=new class extends r{constructor(e){let{popupSelector:t}=e;super({popupSelector:t}),this._imagePreview=this._popupElement.querySelector(".modal__card-image"),this._imagePreviewTitle=this._popupElement.querySelector(".modal__image-title")}open(e,t){this._imagePreview.src=t,this._imagePreview.alt=e,this._imagePreviewTitle.textContent=e,super.open()}}({popupSelector:"#image-popup"}),d=new a("#edit_profile_modal",(e=>{let{name:t,description:n}=e;return function(e,t){m.setUserInfo({name:e,job:t}),d.close()}(t,n)})),_=new a("#add_image_modal",(e=>{let{title:t,link:n}=e;!function(e,t){c({name:e,link:t}),_.close()}(t,n)}));d.setEventListeners(),_.setEventListeners(),u.setEventListeners();const h=new class{constructor(e,t){let{items:n,renderer:s}=e;this._items=n,this._renderer=s,this._container=document.querySelector(t)}addItem(e){this._container.prepend(e)}renderItems(){this._items.forEach(this._renderer)}}({items:[{name:"Yosemite Valley",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"},{name:"Lake Louise",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"},{name:"Bald Mountains",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"},{name:"Latemar",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"},{name:"Vanoise National Park",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"},{name:"Lago di Braies",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg"}],renderer:c},".content");var p;p={formSelector:".modal__form",inputSelector:".modal__form-input",submitButtonSelector:".modal__submit-button",inactiveButtonClass:"modal__submit-button-inactive",inputErrorClass:"modal__input_type_error"},[...document.querySelectorAll(p.formSelector)].forEach((e=>{const n=new t(p,e),s=e.getAttribute("name");l[s]=n,n.enableValidation()})),h.renderItems(),n.addEventListener("click",(()=>{l["profile-form"].resetValidation(),(()=>{const{name:e,job:t}=m.getUserInfo();o.value=e,i.value=t})(),d.open()})),s.addEventListener("click",(()=>{l["add-image-form"].resetValidation(),_.open()}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FDeENpRyxFQUFXakcsRUFBWWtHLGFBQWEsUUFDMUNwQyxFQUFlbUMsR0FBWUQsRUFDM0JBLEVBQVVqRSxrQkFBa0IsSUFtRWhDb0MsRUFBWTRCLGNBSVo3RCxFQUFXcEQsaUJBQWlCLFNBQVMsS0FDbkNnRixFQUFlLGdCQUFnQmpDLGtCQXRETnNFLE1BQ3pCLE1BQU0sS0FBRWxJLEVBQUksSUFBRTBHLEdBQVFOLEVBQVNLLGNBQy9CdEMsRUFBVXlCLE1BQVE1RixFQUNsQm9FLEVBQWlCd0IsTUFBUWMsQ0FBRyxFQW9ENUJ3QixHQUNBakIsRUFBaUJ4QyxNQUFNLElBR3pCUCxFQUFlckQsaUJBQWlCLFNBQVMsS0FDdkNnRixFQUFlLGtCQUFrQmpDLGtCQUNqQ3dELEVBQWMzQyxNQUFNLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJhY3RpY3VtLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3ByYWN0aWN1bS8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9wcmFjdGljdW0vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihjYXJkRGF0YSwgY2FyZFNlbGVjdG9yLCBwb3B1cFdpdGhJbWFnZSwgaGFuZGxlQ2FyZENsaWNrKSB7XG4gICAgdGhpcy5fbmFtZSA9IGNhcmREYXRhLm5hbWU7XG4gICAgdGhpcy5fbGluayA9IGNhcmREYXRhLmxpbms7XG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX3BvcHVwV2l0aEltYWdlID0gcG9wdXBXaXRoSW1hZ2U7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vZGVmaW5lIGVsZW1lbnRzXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb250ZW50X19jYXJkLWxpa2UtYnV0dG9uXCJcbiAgICApO1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb250ZW50X19jYXJkLWRlbGV0ZS1idXR0b25cIlxuICAgICk7XG4gICAgdGhpcy5faW1hZ2VDb250YWluZXIgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY29udGVudF9fY2FyZC1pbWFnZVwiXG4gICAgKTtcblxuICAgIC8vZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5fY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVJbWFnZUNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlSWNvbigpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVJY29uKCk7XG4gICAgfSk7XG4gIH1cblxuICAvL0hhbmRsZSBNZXRob2RzXG5cbiAgX2hhbmRsZURlbGV0ZUljb24oKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgX2hhbmRsZUxpa2VJY29uKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRlbnRfX2NhcmQtbGlrZS1idXR0b25fY2xpY2tlZFwiKTtcbiAgfVxuXG4gIF9oYW5kbGVJbWFnZUNsaWNrKCkge1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9uYW1lLCB0aGlzLl9saW5rKTtcbiAgfVxuXG4gIGdldFZpZXcoKSB7XG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgdGhpcy5fY2FyZFRpdGxlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19jYXJkLXRleHRcIik7XG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50X19jYXJkLWltYWdlXCIpO1xuXG4gICAgLy9jYWxsIHByZXZpb3VzbHkgZGVmaW5lZCBtZXRob2RzXG4gICAgdGhpcy5fcmVuZGVyQ2FyZCgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XG4gIH1cblxuICAvL3JlbmRlciBjYXJkXG4gIF9yZW5kZXJDYXJkKCkge1xuICAgIHRoaXMuX2NhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XG4gICAgdGhpcy5fY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX25hbWU7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG5cbiAgICB0aGlzLl9pbnB1dEVsZW1lbnRzID0gW1xuICAgICAgLi4udGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSxcbiAgICBdO1xuICB9XG5cbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZUVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gIH1cblxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgIyR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgZXJyb3JNZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICBfY2hlY2tGb3JtVmFsaWRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudHMuZXZlcnkoKGlucHV0KSA9PiBpbnB1dC52YWxpZGl0eS52YWxpZCk7XG4gIH1cblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKCkge1xuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gdGhpcy5fY2hlY2tGb3JtVmFsaWRpdHkoKTtcbiAgICBpZiAoaXNGb3JtVmFsaWQpIHtcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2lucHV0RWxlbWVudHMuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLl9mb3JtRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC95b3NlbWl0ZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvYXJvdW5kLXByb2plY3QvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYXRlbWFyXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL2Fyb3VuZC1wcm9qZWN0L2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9hcm91bmQtcHJvamVjdC9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IGFkZEltYWdlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuZXhwb3J0IGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJuYW1lXCJdJyk7XG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nXG4pO1xuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19pbmZvLW5hbWVcIik7XG5leHBvcnQgY29uc3QgcHJvZmlsZURlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIucHJvZmlsZV9faW5mby1kZXNjcmlwdGlvblwiXG4pO1xuXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2Zvcm0taW5wdXRcIixcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6IFwiLm1vZGFsX19zdWJtaXQtYnV0dG9uXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwibW9kYWxfX3N1Ym1pdC1idXR0b24taW5hY3RpdmVcIixcbiAgaW5wdXRFcnJvckNsYXNzOiBcIm1vZGFsX19pbnB1dF90eXBlX2Vycm9yXCIsXG59O1xuXG5leHBvcnQgY29uc3QgY2FyZFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKTtcbmV4cG9ydCBjb25zdCBjYXJkTGlua0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxpbmtcIl0nKTtcbmV4cG9ydCBjb25zdCBjYXJkTGlzdFNlbGVjdG9yID0gXCIuY29udGVudFwiO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuY2xvc2VNb2RhbEJ5RXNjYXBlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZU1vZGFsT25SZW1vdGVDbGljayk7XG4gIH1cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5jbG9zZU1vZGFsQnlFc2NhcGUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmNsb3NlTW9kYWxPblJlbW90ZUNsaWNrKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWxCeUVzY2FwZSA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBjbG9zZU1vZGFsT25SZW1vdGVDbGljayA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9vcGVuZWRcIikpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fY2xvc2VCdXR0b24gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fZXhpdC1idXR0b25cIik7XG4gICAgdGhpcy5fY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2UoKSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XG4gICAgc3VwZXIoeyBwb3B1cFNlbGVjdG9yIH0pO1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGhhbmRsZUZvcm1TdWJtaXQ7XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGlmICh0aGlzLl9mb3JtKSB7XG4gICAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UgPSAoKSA9PiB7XG4gICAgc3VwZXIuY2xvc2UoKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH07XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0TGlzdCA9IFsuLi50aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpXTtcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRMaXN0KSB7XG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dFZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8vaW1wb3J0IGFsbCB0aGUgY2xhc3Nlc1xuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQge1xuICBlZGl0QnV0dG9uLFxuICBhZGRJbWFnZUJ1dHRvbixcbiAgc2V0dGluZ3MsXG4gIGluaXRpYWxDYXJkcyxcbiAgY2FyZExpc3RTZWxlY3RvcixcbiAgbmFtZUlucHV0LFxuICBkZXNjcmlwdGlvbklucHV0LFxufSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuXG5jb25zdCBmb3JtVmFsaWRhdG9ycyA9IHt9O1xuXG4vL2Z1bmN0aW9uXG5jb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKHNldHRpbmdzKSA9PiB7XG4gIGNvbnN0IGZvcm1MaXN0ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2V0dGluZ3MuZm9ybVNlbGVjdG9yKV07XG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KTtcbiAgICBjb25zdCBmb3JtTmFtZSA9IGZvcm1FbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgZm9ybVZhbGlkYXRvcnNbZm9ybU5hbWVdID0gdmFsaWRhdG9yO1xuICAgIHZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gaGFuZGxlSW1hZ2VGb3JtU3VibWl0KG5hbWUsIGxpbmspIHtcbiAgcmVuZGVyQ2FyZCh7IG5hbWU6IG5hbWUsIGxpbms6IGxpbmsgfSk7XG4gIGFkZEltYWdlUG9wdXAuY2xvc2UoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQobmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8oe1xuICAgIG5hbWU6IG5hbWUsXG4gICAgam9iOiBkZXNjcmlwdGlvbixcbiAgfSk7XG5cbiAgZWRpdFByb2ZpbGVQb3B1cC5jbG9zZSgpO1xufVxuXG5jb25zdCBzZXRFZGl0UG9wdXBWYWx1ZXMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgam9iIH0gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBuYW1lSW5wdXQudmFsdWUgPSBuYW1lO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gam9iO1xufTtcblxuY29uc3QgcmVuZGVyQ2FyZCA9IChjYXJkRGF0YSkgPT4ge1xuICBjb25zdCBuZXdDYXJkID0gbmV3IENhcmQoXG4gICAgY2FyZERhdGEsXG4gICAgXCIjY2FyZC10ZW1wbGF0ZVwiLFxuICAgIGltYWdlUG9wdXAsXG4gICAgKHRpdGxlLCBsaW5rKSA9PiBpbWFnZVBvcHVwLm9wZW4odGl0bGUsIGxpbmspXG4gICk7XG4gIGNhcmRTZWN0aW9uLmFkZEl0ZW0obmV3Q2FyZC5nZXRWaWV3KCkpO1xufTtcblxuLy8gSW5zdG5hdGlhdGUgZWxlbWVudHNcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICBuYW1lU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2luZm8tbmFtZVwiLFxuICBqb2JTZWxlY3RvcjogXCIucHJvZmlsZV9faW5mby1kZXNjcmlwdGlvblwiLFxufSk7XG5cbmNvbnN0IGltYWdlUG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoeyBwb3B1cFNlbGVjdG9yOiBcIiNpbWFnZS1wb3B1cFwiIH0pO1xuXG5jb25zdCBlZGl0UHJvZmlsZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXG4gIFwiI2VkaXRfcHJvZmlsZV9tb2RhbFwiLFxuICAoeyBuYW1lLCBkZXNjcmlwdGlvbiB9KSA9PiBoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdChuYW1lLCBkZXNjcmlwdGlvbilcbik7XG5jb25zdCBhZGRJbWFnZVBvcHVwID0gbmV3IFBvcHVwV2l0aEZvcm0oXG4gIFwiI2FkZF9pbWFnZV9tb2RhbFwiLFxuICAoeyB0aXRsZSwgbGluayB9KSA9PiB7XG4gICAgaGFuZGxlSW1hZ2VGb3JtU3VibWl0KHRpdGxlLCBsaW5rKTtcbiAgfVxuKTtcbmVkaXRQcm9maWxlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmFkZEltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbmltYWdlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8gcmVuZGVyIHRoZSBjYXJkc1xuY29uc3QgY2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIGl0ZW1zOiBpbml0aWFsQ2FyZHMsXG4gICAgcmVuZGVyZXI6IHJlbmRlckNhcmQsXG4gIH0sXG4gIGNhcmRMaXN0U2VsZWN0b3Jcbik7XG5cbmVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpO1xuY2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoKTtcblxuLy9zcGVjaWZpYyBldmVudCBsaXN0ZW5lcnNcblxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBmb3JtVmFsaWRhdG9yc1tcInByb2ZpbGUtZm9ybVwiXS5yZXNldFZhbGlkYXRpb24oKTtcbiAgc2V0RWRpdFBvcHVwVmFsdWVzKCk7XG4gIGVkaXRQcm9maWxlUG9wdXAub3BlbigpO1xufSk7XG5cbmFkZEltYWdlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGZvcm1WYWxpZGF0b3JzW1wiYWRkLWltYWdlLWZvcm1cIl0ucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEltYWdlUG9wdXAub3BlbigpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBqb2JTZWxlY3RvciB9KSB7XG4gICAgdGhpcy5fbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5hbWVTZWxlY3Rvcik7XG4gICAgdGhpcy5fam9iRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioam9iU2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxuICAgICAgam9iOiB0aGlzLl9qb2JFbGVtZW50LnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VySW5mbyh7IG5hbWUsIGpvYiB9KSB7XG4gICAgdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIHRoaXMuX2pvYkVsZW1lbnQudGV4dENvbnRlbnQgPSBqb2I7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcbiAgICBzdXBlcih7IHBvcHVwU2VsZWN0b3IgfSk7XG4gICAgdGhpcy5faW1hZ2VQcmV2aWV3ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcmQtaW1hZ2VcIik7XG4gICAgdGhpcy5faW1hZ2VQcmV2aWV3VGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLm1vZGFsX19pbWFnZS10aXRsZVwiXG4gICAgKTtcbiAgfVxuXG4gIG9wZW4oY2FyZE5hbWUsIGNhcmRMaW5rKSB7XG4gICAgdGhpcy5faW1hZ2VQcmV2aWV3LnNyYyA9IGNhcmRMaW5rO1xuICAgIHRoaXMuX2ltYWdlUHJldmlldy5hbHQgPSBjYXJkTmFtZTtcbiAgICB0aGlzLl9pbWFnZVByZXZpZXdUaXRsZS50ZXh0Q29udGVudCA9IGNhcmROYW1lO1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgaXRlbXMsIHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5faXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cblxuICByZW5kZXJJdGVtcygpIHtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKHRoaXMuX3JlbmRlcmVyKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImNhcmREYXRhIiwiY2FyZFNlbGVjdG9yIiwicG9wdXBXaXRoSW1hZ2UiLCJoYW5kbGVDYXJkQ2xpY2siLCJ0aGlzIiwiX25hbWUiLCJuYW1lIiwiX2xpbmsiLCJsaW5rIiwiX2NhcmRTZWxlY3RvciIsIl9wb3B1cFdpdGhJbWFnZSIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJfbGlrZUJ1dHRvbiIsIl9jYXJkRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJfZGVsZXRlQnV0dG9uIiwiX2ltYWdlQ29udGFpbmVyIiwiX2NhcmRJbWFnZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlSW1hZ2VDbGljayIsIl9oYW5kbGVMaWtlSWNvbiIsIl9oYW5kbGVEZWxldGVJY29uIiwicmVtb3ZlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0VmlldyIsImRvY3VtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9jYXJkVGl0bGUiLCJfcmVuZGVyQ2FyZCIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0IiwiRm9ybVZhbGlkYXRvciIsInNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJfZm9ybUVsZW1lbnQiLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvbiIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9pbnB1dEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZUVsZW1lbnQiLCJpZCIsImFkZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiX2NoZWNrRm9ybVZhbGlkaXR5IiwiZXZlcnkiLCJpbnB1dCIsInZhbGlkaXR5IiwidmFsaWQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJkaXNhYmxlZCIsInJlc2V0VmFsaWRhdGlvbiIsImZvckVhY2giLCJlbmFibGVWYWxpZGF0aW9uIiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJlZGl0QnV0dG9uIiwiYWRkSW1hZ2VCdXR0b24iLCJuYW1lSW5wdXQiLCJkZXNjcmlwdGlvbklucHV0IiwiUG9wdXAiLCJfcmVmIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJvcGVuIiwiY2xvc2VNb2RhbEJ5RXNjYXBlIiwiY2xvc2VNb2RhbE9uUmVtb3RlQ2xpY2siLCJjbG9zZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJ0YXJnZXQiLCJjb250YWlucyIsInNldEV2ZW50TGlzdGVuZXJzIiwiX2Nsb3NlQnV0dG9uIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJzdXBlciIsIl9oYW5kbGVTdWJtaXQiLCJfZm9ybSIsInJlc2V0IiwiX2dldElucHV0VmFsdWVzIiwiaW5wdXRMaXN0IiwiaW5wdXRWYWx1ZXMiLCJ2YWx1ZSIsImZvcm1WYWxpZGF0b3JzIiwicmVuZGVyQ2FyZCIsIm5ld0NhcmQiLCJpbWFnZVBvcHVwIiwidGl0bGUiLCJjYXJkU2VjdGlvbiIsImFkZEl0ZW0iLCJ1c2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImpvYlNlbGVjdG9yIiwiX25hbWVFbGVtZW50IiwiX2pvYkVsZW1lbnQiLCJnZXRVc2VySW5mbyIsImpvYiIsInNldFVzZXJJbmZvIiwiX3JlZjIiLCJfaW1hZ2VQcmV2aWV3IiwiX2ltYWdlUHJldmlld1RpdGxlIiwiY2FyZE5hbWUiLCJjYXJkTGluayIsImVkaXRQcm9maWxlUG9wdXAiLCJkZXNjcmlwdGlvbiIsImhhbmRsZVByb2ZpbGVGb3JtU3VibWl0IiwiYWRkSW1hZ2VQb3B1cCIsImhhbmRsZUltYWdlRm9ybVN1Ym1pdCIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwicHJlcGVuZCIsInJlbmRlckl0ZW1zIiwidmFsaWRhdG9yIiwiZm9ybU5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRFZGl0UG9wdXBWYWx1ZXMiXSwic291cmNlUm9vdCI6IiJ9