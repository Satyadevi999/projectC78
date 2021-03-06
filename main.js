 var names_array=["Sriram","Satya","Sudeep","Vedaanshi"];
 images_array=["sriram.jpeg","satya.jpeg","sudeep.jpeg","veda.jpeg"];
 var i=0;
 console.log(names_array);
 console.log(images_array);
 function updatePicture()
 {
     if(i==4)
     {
         i=0;
     }
     console.log("what happened");
     
     var updated_name=names_array[i];
     var updated_image=images_array[i];
     document.getElementById("family_member").innerHTML=updated_name;
     document.getElementById("pic").src=updated_image;
     i++;

 }