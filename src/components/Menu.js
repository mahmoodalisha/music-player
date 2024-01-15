import React, {useEffect} from "react";

function Menu({title, menuObject}) { //prop.title we are destructuring It will send the prop as an object 
        useEffect(() => {
          const allLi = document
          .querySelector(".MenuContainer ul")
          .querySelectorAll("li");

          function changeMenuActive(){
            allLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
          }
          
          allLi.forEach(n => n.addEventListener('click', changeMenuActive))
        }, []); //"active" event is the event when you click on the name, green highlight remains there
        // which means that page is open
        
        
  return (<div className='MenuContainer'>
    <p className="title">{title}</p>

    <ul>{
        menuObject && menuObject.map((menu) => (        //.map func is to look through each element
            <li key={menu.id}>
                {" "}
                <a href="#">
                  <i>{menu.icon} </i>          
                    <span>{menu.name}</span>
                    </a> 
            </li>
        ))}
    </ul>
    </div>
  ); //li.icon is used for the list of icons and home,dashboard,radio,artist,albums,podcast.
}
export {Menu};