document.getElementById("addnote").addEventListener("click", fun)

function fun(){
// console.log(document.getElementById("ta").value);
// console.log(document.getElementById("color").value);

const notecart = notecard(document.getElementById("ta").value, document.getElementById("color").value);
document.getElementById("b1").append(notecart);

document.getElementById("ta").value = "";
}

/*
<section id="b1">
      <div class="note">
           <p id="p1">Lorem ipsum, dolor sit ame ipsam facere, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate blanditiis consequatur est? Blanditiis quidem quaerat itaque, Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos minus sit autem odio laudantium, laboriosam consectetur aliquid omnis unde, corrupti numquam ea voluptate sapiente eos a quaerat, tempore molestiae. veniam consequuntur provident rerum, sit, totam ab delectus dignissimos. Hic consequatur dolorem ea. te veritatis odio aliquid in, ad aliquam dolorem?</p>
           <p id="btn">btn</p>
    </div> */

     const notecard = (a,b) => {

    let pp1 = document.createElement("p");
    pp1.classList.add("p1");
    let pp2 = document.createElement("p");
    pp2.classList.add("p2");
    pp1.innerText =  a;
    pp2.innerText = "del";
     pp2.addEventListener("click", (e) => e.target.parentElement.remove() )  //() => {}
    
    let du = document.createElement("div");
    du.classList.add("note");

    du.append(pp1);
    du.append(pp2);

     du.style.backgroundColor = b;

    return du;
     }


