const a={email:"",message:""},t=document.querySelector(".feedback-form"),s=t.querySelector('[name="email"]'),m=t.querySelector('[name="message"]');window.addEventListener("load",()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(s.value=e.email||"",m.value=e.message||"",a.email=e.email||"",a.message=e.message||"")});t.addEventListener("input",e=>{a[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(a))});t.addEventListener("submit",e=>{if(e.preventDefault(),!a.email||!a.message){alert("Заполните все поля");return}console.log(a),localStorage.removeItem("feedback-form-state"),t.reset(),a.email="",a.message=""});
