var  button = document.querySelector('.EditPageButton');
button.addEventListener('click',  PeopleWrapper );
var  oldname = "",
     oldjob = "",
     oldemail = "",
     oldphone = "",
     
     PeopleArhive = [];
        function PeopleWrapper(){
               document.querySelector('.EditPeopleWrapper').classList.toggle("EditPeopleWrapperNone");
               document.querySelector('.a').classList.toggle("b");
               document.querySelector('.EditPageButton--active').classList.toggle("EditPageButton");
            }   
          // ---------------------------ADD PERSON FUNCTION--------------------
        function AddPerson(){
                document.querySelector(".PeopleCardsContainerHidden").classList.remove("PeopleCardsContainer");
                PersonCart = {Name: "", Job: "", Email: "", Phone: "" };
                PersonCart.Name = document.getElementById('Name').value;
                PersonCart.Job = document.getElementById('Job').value,
                PersonCart.Email = document.getElementById('Email').value,
                PersonCart.Phone = document.getElementById('Phone').value; 

                 div = document.createElement('div');
                 div1 = document.createElement('div');
                 div2 = document.createElement('div');
                 div3 = document.createElement('div');
                 div4 = document.createElement('div');
                 div5 = document.createElement('div');
    
                div.classList.add('PersonCard');
                div1.classList.add('PersonImage');
                div2.classList.add('PersonName');
                div3.classList.add('personJobTitle');
                div4.classList.add('eMail');
                div5.classList.add('PersonPhoneNumber');

                PeopleArhive.push(PersonCart);
                div.dataset.id = PeopleArhive.length - 1;
               
   
                document.querySelector(".PeopleCardWrapper").appendChild(div);
                div.appendChild(div1);
                div.appendChild(div2);
                div.appendChild(div3);
                div.appendChild(div4);
                div.appendChild(div5);
 
                div2.innerHTML = PersonCart.Name;   
                div3.innerHTML = PersonCart.Job;  
                div4.innerHTML = PersonCart.Email;
                div5.innerHTML = PersonCart.Phone; 

                
       
                document.getElementById('Name').value = "";
                document.getElementById('Job').value = "";
                document.getElementById('Email').value = "";
                document.getElementById('Phone').value = ""; 
      
             //---------------------ACTIVE CART FUNCTION-------------------
                div.addEventListener('click', function(event){
                  event.target.classList.toggle('PersonCard--active');
                  document.getElementById('AddOnePerson').classList.toggle("AddOnePersonHidde");
                  document.getElementById('Save').classList.toggle("SaveDisplay");
                  document.getElementById('Delete').classList.toggle("DeleteDisplay");
                 
                  
                  
                  

                  
                  
                   PrsonInfo = PeopleArhive[event.target.dataset.id];

                  document.getElementById('Name').value  = PrsonInfo.Name;   
                  document.getElementById('Job').value = PrsonInfo.Job;  
                  document.getElementById('Email').value = PrsonInfo.Email;
                  document.getElementById('Phone').value = PrsonInfo.Phone; 
                  

               
              });
              }
              //-------------------DELETE FUNCTION-------------------------
              document.getElementById('Delete').addEventListener('click', function (){
                  removeElement =  document.querySelector(".PersonCard--active");
                  document.querySelector(".PeopleCardWrapper").removeChild(removeElement);
                  document.getElementById('AddOnePerson').classList.toggle("AddOnePersonHidde");
                  document.getElementById('Save').classList.toggle("SaveDisplay");
                  document.getElementById('Delete').classList.toggle("DeleteDisplay");
                  document.getElementById('Name').value = "";
                  document.getElementById('Job').value = "";
                  document.getElementById('Email').value = "";
                  document.getElementById('Phone').value = "";
                
              })
              //------------------SAVE FUNCTION--------------------------
              function NewInfo(){
                PrsonInfo.Name = document.getElementById('Name').value;
                PrsonInfo.Job = document.getElementById('Job').value,
                PrsonInfo.Email = document.getElementById('Email').value,
                PrsonInfo.Phone = document.getElementById('Phone').value; 
              
                document.querySelector(".PersonCard--active > .PersonName").innerHTML = PrsonInfo.Name;
                document.querySelector(".PersonCard--active > .personJobTitle").innerHTML = PrsonInfo.Job;  
                document.querySelector(".PersonCard--active > .eMail").innerHTML = PrsonInfo.Email;
                document.querySelector(".PersonCard--active > .PersonPhoneNumber").innerHTML = PrsonInfo.Phone; 
                document.getElementById('AddOnePerson').innerHTML = "+ Add Person"
               
                document.querySelector(".PersonCard--active ").classList.remove('PersonCard--active');
                document.getElementById('AddOnePerson').classList.toggle("AddOnePersonHidde");
                document.getElementById('Save').classList.toggle("SaveDisplay");
                document.getElementById('Delete').classList.toggle("DeleteDisplay");
                
                document.getElementById('Name').value = "";
                document.getElementById('Job').value = "";
                document.getElementById('Email').value = "";
                document.getElementById('Phone').value = "";
              }

    


  

  

   
     
   


 






 

   
   